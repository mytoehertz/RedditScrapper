// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the Yelp website
var scrape = function() {
  // Scrape the Yelp website
  return axios.get("https://ny.eater.com/maps/best-cafe-coffee-shop-new-york-city-brooklyn-queens").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    // Make an empty array to save our cafe info
    var cafes = [];

    var cardHeads = $(".c-mapstack__card-hed");
console.log(cardHeads[0].parent.attr("data-slug"));
  $(cardHeads).each((i, el) => {
   console.log($(el).find("h1").text());
   var dataSlug = ($(el).parent().attr("data-slug"));
   var parentNode = $(el).parent();
   var address = $(parentNode).find(".c-mapstack__address").text();
   console.log(address);
   var phoneNumber = $(parentNode).find(".c-mapstack__phone.desktop-only").text();
   console.log(phoneNumber);
   var sum = $(parentNode).find(".c-entry-content").find("p").text();
   console.log(sum);
    })



      if (head && sum && phoneNumber) {
    
      
        var dataToAdd = {
          headline: dataSlug,
          summary: sum,
          phone: phoneNumber,
      
        };

        
        cafes.push(dataToAdd);
      }
    
    return cafes;
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;
