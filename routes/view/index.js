var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function(req, res) {
  db.Headline.find({ saved: false })
    .sort({ date: -1 })
    .then(function(dbCafes) {
      res.render("home", { cafes: dbCafes });
    });
});

// This route renders the saved handlebars page
router.get("/saved", function(req, res) {
  db.Headline.find({ saved: true })
    .sort({ date: -1 })
    .then(function(dbCafes) {
      res.render("saved", { cafes: dbCafes });
    });
});

module.exports = router;
