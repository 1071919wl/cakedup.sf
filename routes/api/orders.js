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

module.exports = router;