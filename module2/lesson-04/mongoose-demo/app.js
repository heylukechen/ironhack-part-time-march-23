const mongoose = require('mongoose'); // import the mongoose package
// Two Models 

//User model

// name --> String
// email --> String
// password --> String
const users = [
    {name: 'John', email: 'johndoe@hmail.com', password: 'password123'}, 
    {name: 'Jane', email: 'janedoe@gmail.com', password: 'password123'},
    {name: 'Bill', email: 'billdoe@gmail.com', password: 'password123'}
]

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})


const User = mongoose.model('User', userSchema);

// Pets model

// name --> String
// type --> String
// age --> Number

const pets = [
    {name: 'Jadah', type: 'cat', age: 3},
    {name: 'Max', type: 'dog',age: 3},
    {name: 'Thor', type: 'fish', age: 3}
]

const petSchema = new mongoose.Schema({
    name: String,
    type: String,
    age: Number
}); // this defines the data structure for my 'Cat' model

const Pet = mongoose.model('Pet', petSchema); // this creates a 'Cat' model


mongoose.connect('mongodb://localhost:27017/test-pets')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
        // .then(() => User.insertMany(users)) // return Promise with Users added to the DB
        // .then((newUsers) => console.log(newUsers))
        .then(()=> Pet.insertMany(pets)) // Pet.create({name: ''})
        .then(newPets => console.log(`${newPets.length} pets were added`))
        .catch(err => console.log(err));

