// display all users, signup users and display a single user based on username
const port = 3002;
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // import mongoose
const User = require('./models/User.model');// import the 'User' model

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

mongoose.connect('mongodb://localhost:27017/crud-demo')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.log(err))

app.get('/', (req,res) => {
    res.render('index')
})

// Display the signup form
app.get('/signup', (req, res) => {
    res.render('signup')
})

// Creating the user
app.post('/signup', (req, res)=>{
    console.log('req.body', req.body)
    // Create a User in our DB
    User.create(req.body)
    .then( newUser => {
        console.log('newUser', newUser)
        // res.redirect('/users') // Sending a get request to path '/users'
        res.redirect(`/profile/${newUser._id}`)  // Send the user to the Homepage
    })
    .catch(err => console.log(err))
})

app.get('/users', (req, res) => {
    // Send the users in my Db to the front end
    User.find()
        .then(allUsers => {
            console.log('allUsers', allUsers);
            res.render('users', { allUsers });
        })
        .catch(err => console.log(err))
    
})

app.get('/search', (req, res) =>{
    console.log(req.query)
    if(req.query.username !== ''){ // make sure that the input is not empty
        // search the DB for a user with a  matching username
        User.find({username: req.query.username})
            .then(foundUsers => {
                res.render('search', {foundUsers: foundUsers})
            })
    }
    else {
        res.render('search')
    }
   
})
//Display Edit User Form
app.get('/profile/:userId/edit', (req, res) => {
    User.findById(req.params.userId)
        .then(foundUser => {
            console.log('foundUser', foundUser)
            res.render('edit-user', foundUser)
        })
        .catch(err => console.log(err))
    
})
// Handle Update Action
app.post('/profile/:userId/edit', (req, res) => {
    const {userId} = req.params;
    const {username, email, password} = req.body;

    User.findByIdAndUpdate(userId, {username, email, password}, {new: true})
        .then(updatedUser => {
            console.log('updatedUser', updatedUser);
            res.redirect(`/profile/${updatedUser._id}`)
        })
})
// Handle Delete Action
app.post('/profile/:userId/delete', (req, res) => {
    const { userId } = req.params; // const userId = req.params.userId;

    User.findByIdAndRemove(userId)
        .then(deletedUser => {
            console.log('deletedUser', deletedUser)
            res.redirect('/users')
        })
    
})

app.get('/profile/:userId', (req, res) => {
    console.log('req.params', req.params)
    // User.findOne({username: req.params.username})
    User.findById(req.params.userId)
    .then(foundUser => {
        console.log('foundUser', foundUser)
        res.render('profile', { foundUser })
    })
    .catch(err => console.log(err))
    
})

app.listen(port, () => console.log(`App is listening on port ${port}`))