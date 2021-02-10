const express = require('express');
const router = express.Router();
const passport = require("passport");
const validateOrderInput = require("../../validation/order");
const Order = require('../../models/Order');

router.get("/", (req, res) => {
    Order
        .find()
        .sort({date: -1})
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json(err));
});



router.post("/", 
    (req, res) => {

        const { isValid, errors } = validateOrderInput(req.body);
    
        if(!isValid){
            return res.status(400).json(errors);
        }

        const newOrder = new Order({
            name: req.body.name,
            phone: req.body.phone,
            date: req.body.date
        });

        newOrder.save()
            .then(order => res.json(order));

    }
)



router.patch("/:id", passport.authenticate('jwt',{session:false}), async (req, res) => {

    const { isValid, errors } = validateOrderInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }


    try {
        let order = await Order.findById(req.params.id)
        
            if (req.body.name) {
                order.name = req.body.name
            }
            
            if (req.body.phone) {
                order.phone = req.body.phone
            }

            if (req.body.date) {
                order.date = req.body.date
            }

            await order.save()
            res.send(order)

	} catch(err) {
       
         res.status(404).json({
            error: "Order doesn't exist!"
        })
    }
    
})


router.delete("/:id", passport.authenticate('jwt',{session:false}), async (req, res) => {

    const order = await Order.findOne({ _id: req.params.id })

    if(order) {
            Order.findByIdAndDelete(req.params.id)
            .then(() => res.json(order))
            .catch(err => res.status(404).json(err))
    } else {
        return res.json("question not found")
    }
})

module.exports = router;