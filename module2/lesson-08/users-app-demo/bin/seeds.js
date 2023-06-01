const mongoose = require('mongoose'); // import mongoose
const User = require('../models/User.model');// import the 'User' model

mongoose.connect('mongodb://localhost:27017/crud-demo')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.log(err))

const users = [
    {
        username: 'John Doe',
        email: 'johndoe@gmail.com',
        password: 'Test123'
    },
    {
        username: 'Jane Doe',
        email: 'janedoe@gmail.com',
        password: 'Test123'
    },
    {
        username: 'Marcel Doe',
        email: 'marceldoe@gmail.com',
        password: 'Test123'
    },
    {
        username: 'Chris Rock',
        email: 'chrisrock@gmail.com',
        password: 'Test123'
    }
];

User.create(users)
    .then(createdUsers => {
        console.log(`Users were successfully added`)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))