const express = require('express');
const router = express.Router();

const axios = require('axios');

/* GET home page */
router.get("/", async (req, res, next) => {
  const response =  await axios.get('https://cat-fact.herokuapp.com/facts');
  const catsFacts = response.data.map(cat => cat.text);

  res.render("index", { catsFacts });
});

module.exports = router;
