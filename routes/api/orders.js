const express = require('express');
const router = express.Router();
// const passport = require("passport");
const validateOrderInput = require("../../validation/order");
const Order = require('../../models/Order');

// router.get('/test', (req, res) => {
//     res.json({ msg: "This is the order route"});
// });


router.get("/", (req, res) => {
    Order
        .find()
        .sort({date: -1})
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json(err));
});



router.post("/", 
    // passport.authenticate("jwt", { session: false }),
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
    try {
        let order = await Order.findById(req.params.id)

        // if(req.user.id ===  `${order.user._id}`){
        
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
        // }else {
        // res.status(404).json({
        //     error: 'Incorrect user'
        // })

        // }
	} catch(err) {
       
        res.status(404).json({
            error: "Order doesn't exist!"
        })
    }
    
})


router.delete("/:id", passport.authenticate('jwt',{session:false}), async (req, res) => {

    const order = await Order.findOne({ _id: req.params.id })

    if(order) {
        // if (`${question.user}` === req.user.id){

            Order.findByIdAndDelete(req.params.id)
            // .then(  async () => {

            //     let users = []; 

            //     users.push(order.user)

            //     order.responses.forEach(response => {
            //         users.push(response.user)
            //     })

            //     users.forEach(async user => {
            //         let questionUser = await User.findById(user._id)
            //         let questionIdx = questionUser.questions.indexOf(question._id)
            //         questionUser.questions.splice(questionIdx, 1)
            //         await questionUser.save()
            //     } )

            // }
            // )
            .then(() => res.json(order))
            .catch(err => res.status(404).json(err))
        // } else{
        //     res.status(404).json({error: 'Incorrect user'})
        // }
    } else {
        res.json("question not found")
    }
})

module.exports = router;