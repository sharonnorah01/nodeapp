const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();      


const bcrypt = require("bcrypt");  //importing bcrypt

const User = require("../models/user");        //calling the user mode
router.post("/signup", (req, res, next)=>{

    bcrypt.hash(req.body.password, 10, (err, hash)=>{
            if(err){
                return res.status(500).json({
                    error: err
                })
            }else{
                 const user = new User({               //create new user
        _id: new mongoose.Types.ObjectId(),    //create new id
        email: req.body.email,
        password: hash    //hashed password
    });
    user.save()    //to save the user in the db
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message: "user created"
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });   
            }
        })
   

})

module.exports = router;

