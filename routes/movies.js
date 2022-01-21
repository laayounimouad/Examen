var express = require("express");
var router = express.Router();

/* GET movies listing. */
router.get("/", function (req, res, next) {
  var movies = require("../movies_reduit.json");
  res.send(movies);
});

module.exports = router;
