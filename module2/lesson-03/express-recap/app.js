const port = 3000;
const express = require("express");
const axios = require("axios")
const path = require('path')
const app = express();

app.set('view engine', 'hbs') // setting hbs as the template language for this app
app.set('views', __dirname + '/views')// set the 'views' folder as the place to access all the views files

app.use('/', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    const loggedUser = { fullName: 'Lloyd Chambrier', role: 'Web Development Instructor' };

    // axios.get('https://randomfox.ca/floof/')
    //     .then((response) =>{
    //         const randomImg = response.data;
    //         console.log('randomImg', randomImg)
    //         res.render('index', {loggedUser: loggedUser, randomImg: randomImg})
    //     })

    axios.get('https://cat-fact.herokuapp.com/facts/random')
        .then(response => {
            console.log(response.data)
            const randomCatFact = response.data.text;

            res.render('index', {loggedUser: loggedUser, catFact: randomCatFact})
        })
        .catch(err => console.log(err))

    
})

app.get("/users", (req, res) => {
    const users = [
        { fullName: 'Lloyd Chambrier', role: 'Web Development Instructor' },
        { fullName: 'Humberto Vallejo', role: 'Web Development Teaching Assistant' },
        { fullName: 'Ines Almeida', role: 'Web Development Student' },
        { fullName: 'Luis Ramirez', role: 'Web Development Student' }
        ]
   res.render('users', { users: users })
})

app.get('/pets', (req, res) => {
    const pets = ["Dobberman", "Parrot", "Black cat"]

    res.render('pets', { pets: pets, layout: false})
})

app.listen(port, ()=> console.log(`App is running on port ${port}`))