const router = require("express").Router();
const ApiService = require("../services/api.service");

const myApiService = new ApiService(); // creating an instance

/* GET all the characters page */
router.get("/list", (req, res, next) => {
    myApiService
    .getAllCharacters()
    .then(response => {
        res.render("pages/characters-list", {characters: response.data})
    })
    .catch(error => console.log(error));
});

// Render a form to create a new character.
router.get('/create', (req, res) => {
    res.render("pages/new-character-form");
});

  // Submit info to create a new character.
router.post('/create', (req, res) => {
    const { name, occupation, weapon } = req.body;

    myApiService
    .createCharacter({ name, occupation, weapon })
    .then(response => {
        console.log(response.data)
        res.redirect('/movie-characters/list')
    })
    .catch(error => console.log(error));
});

// Render a form to edit a character.
router.get('/edit/:id', (req, res) => {
    myApiService
    .getOneCharacter(req.params.id)
    .then(response => {
        console.log('Character found', response.data)
        res.render("pages/edit-character-form", {character: response.data});
    })
    .catch(error => console.log(error));
  });

    // Submit info to edit a character with a matching id.
router.post('/edit/:id', (req, res) => {
        const { id } = req.params;
        const { name, occupation, weapon } = req.body;

        myApiService
        .editCharacter(id, {name, occupation, weapon})
        .then(response => {
            console.log('response', response.data)
            res.redirect('/movie-characters/list')
        })
        .catch(error => console.log(error));
});

 // Delete a character with a matching id.
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;

    myApiService
    .deleteCharacter(id)
    .then(() => {
        res.redirect('/movie-characters/list')
    })
    .catch(error => console.log(error))
});

router.get("/:characterId", (req, res) => {
    myApiService
    .getOneCharacter(req.params.characterId)
    .then(response => {
        console.log('Character found', response.data)
        res.json(response.data)
    })
    .catch(error => console.log(error));
})


module.exports = router;
