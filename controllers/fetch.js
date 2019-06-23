// Controller for our scraper
// ============================
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    
    return scrape()
      .then(function(articles) {
        // insert cafes into the db
        return db.Headline.create(cafes);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new cafes today. Check back tomorrow!"
          });
        }
        else {
          //send back a count of how many new cafes we got
          res.json({
            message: "Added " + dbHeadline.length + " new cafes!"
          });
        }
      })
      .catch(function(err) {
 
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
