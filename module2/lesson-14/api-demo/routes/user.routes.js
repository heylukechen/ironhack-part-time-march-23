const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();

const User = require("../models/User.model");

/* GET Return all users page */
router.get("/", async (req, res, next) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers)
    } catch (error) {
        console.log(error)
    }
 
});

// POST Create user route
router.post("/", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        console.log('req.body', req.body);
        const newUser = await User.create({ username, email, password: passwordHash});
        res.json(newUser);
        
    } catch (error) {
        console.log(error)
    }

    
})

/* GET Return a specific user page */
router.get("/:userId", async (req, res, next) => {
    try {
        const singleUser = await User.findById(req.params.userId);
        res.json(singleUser)
        
    } catch (error) {
        console.log(error)
    }
 });

// Update a Specific User
router.put('/:userId', async (req, res) => {
    try {
        const {username, email} = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {username, email}, {new: true})
        res.json(updatedUser)
    } catch (error) {
        console.log(error)
    }
})

// Delete a Specific User
router.delete('/:userId', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.userId);
        res.json(deletedUser)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;
