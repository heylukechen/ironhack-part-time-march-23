const mongoose = require('mongoose'); // import mongoose
const User = require('./models/User.model');// import the 'User' model

mongoose.connect('mongodb://localhost:27017/cats-demo')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.then(()=> {
    return User.find({username: 'Lloyd Chambrier'}); // querying for all the users in the DB
})
.then(allUsers => console.log('all users', allUsers))
.then(()=>  {
    return mongoose.connection.close()
})
.then(()=> console.log('Mongoose connection has closed'))
// DELETE SINGLE USER
// .then(()=>{
//     return User.findByIdAndRemove('646fa25d560657b0206d4e72')
// })
// .then(deletedUser => console.log('deletedUser', deletedUser))
// UPDATE SINGLE USER
// .then(() => {
    // return User.findByIdAndUpdate('646fa271025e6aea02ae078a', {avatarUrl: ''}, {new: true})
// })
// .then(updatedUser => console.log('updatedUser', updatedUser))
//UPDATE MANY USERS ACTION
// .then(() => {
//     return User.updateMany({email: /@test\.com/}, {avatarUrl: 'images/default-new-avatar.jpg'})
// })
// .then(updatedUsers => console.log('updatedUsers', updatedUsers))
//READ SINGLE USER ACTION
// .then(() => {
//     return User.findOne({username: 'Lloyd Chambrier'})

// })
// .then(foundUser => console.log('foundUser', foundUser))
//READ ALL USERS ACTION
// .then(()=> {
//     return User.find({username: 'Lloyd Chambrier'}); // querying for all the users in the DB
// })
// .then(allUsers => console.log('all users', allUsers))
// CREATE ACTION
// .then(() => { 
//     return User.create({ username: 'Humberto', email: 'humberto@test.com'})
// })
// .then( newUser => console.log('new user was added', newUser))
.catch(err => console.log(err))