const express = require('express');
const router = express.Router();
const passport = require("passport");
const validateOrderInput = require("../../validation/pickup");
const Pickup = require('../../models/Pickup');

router.get("/", (req, res) => {
    Pickup
        .find()
        .sort({setDate: -1})
        .then(setDates => res.json(setDates))
        .catch(err => res.status(400).json(err));
});



router.post("/", 
    (req, res) => {

        const { isValid, errors } = validateOrderInput(req.body);
    
        if(!isValid){
            return res.status(400).json(errors);
        }

        const newPickup = new Pickup({
            setDate: req.body.setDate,
        });

        newPickup.save()
            .then(setDate => res.json(setDate));

    }
)



router.patch("/:id", passport.authenticate('jwt',{session:false}), async (req, res) => {

    const { isValid, errors } = validateOrderInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }


    try {
        let pickup = await Pickup.findById(req.params.id)

            if (req.body.setDate) {
                order.setDate = req.body.setDate
            }

            await pickup.save()
            res.send(pickup)

	} catch(err) {
       
         res.status(404).json({
            error: "Pickup doesn't exist!"
        })
    }
    
})


module.exports = router;