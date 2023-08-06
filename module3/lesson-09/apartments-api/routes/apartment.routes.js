const Apartment = require("../models/Apartment.model");
const router = require("express").Router();

router.get("/apartments", (req, res, next) => {
    // return the list of all apartments
    Apartment.find()
    .then(apartments => res.json(apartments))
    .catch(err =>console.log(err))
  
});

router.post("/apartments", (req, res)=>{
    console.log('req.body', req.body)
   
    Apartment.create(req.body)
            .then(newApartment => res.json(newApartment))
            .catch(err =>console.log(err))
})

router.get("/apartments/:apartmentId", (req, res, next) => {
    Apartment.findById(req.params.apartmentId)
            .then(singleApartment => res.json(singleApartment))
            .catch(err =>console.log(err))
})

module.exports = router;