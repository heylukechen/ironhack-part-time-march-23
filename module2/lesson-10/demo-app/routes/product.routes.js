const express = require('express');
const router = express.Router();

const Product = require('../models/Product.model');

/* GET home page */
router.get("/", (req, res, next) => {
    Product.find()
            .then(allProducts => {
                res.render('products/list', {allProducts})
            })
            .catch(err => console.log(err))
});

router.get("/new", (req, res) => {
    res.render('products/new')
})

module.exports = router;