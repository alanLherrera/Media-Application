const express = require("express");
const router = express.Router();
const MD = require("../models")

// Home page route.
router.get("/", function (req, res) {
  res.send("Media HomePage");
});








module.exports = router;
