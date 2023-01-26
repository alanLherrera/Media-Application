const express = require("express");
const router = express.Router();
const MD = require("../models");





//Create
router.post('/', (req, res) => {
  res.send(movies)
})


// Home page route.
router.get("/", (req, res) => {
  MD.movies.Find()
  .then((movies) => {
    res.render('movies', { movies })
  })
  .catch(err => {
    console.log(err)
    res.render('ERROR 404')
  })
});








module.exports = router;
