const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
// const password = require("password");
const validateRegisteredInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/test', (req, res) => {
    res.json({ msg: "This is the user route"});
});

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisteredInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }


    User.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.status(400).json({email: 'A user is already registered with that email'})
            
        }else {
            const newUser = new User({
                email: req.body.email,
                password: req.body.password
            })
            //TESTING in POSTMAN - remove
                // newUser.save().then(user => res.send(user)).catch(err => res.send(err));
            //TESTING in POSTMAN - remove
        bcrypt.genSalt(10, (err, salt)  => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then((user) => res.json(user))
                        .catch((err) => console.log(err))
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const {errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }) //.find will return an array instead of Obj
        .then( user => {
            if(!user){
                return res.status(404).json({email: 'This user does not exist.'});
            }

            bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if(isMatch){
                        // res.json({msg: 'Success!'}); test
                        const payload = {
                            id: user.id,
                            email: user.email
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        )
                    }else{
                        return res.status(400).json({passpord: 'Incorrect password'});
                    }
                })
        })
})


module.exports = router;