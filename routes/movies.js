var express = require("express");
var router = express.Router();

/* GET movies listing. */
router.get("/", function (req, res, next) {
  res.send("here are all the informations about movies");
});

module.exports = router;
