// Web Scraper Homework Solution Example
// (be sure to watch the video to see
// how to operate the site in the browser)
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var axios = require("axios");
var cheerio = require("cheerio");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Require our routes
var routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have every request go through our route middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// axios.get("https://ny.eater.com/maps/best-cafe-coffee-shop-new-york-city-brooklyn-queens").then(function(res) {
// var $ = cheerio.load(res.data);
// var cardHeads = $(".c-mapstack__card-hed");
// // console.log(cardHeads[0].parent.attr("data-slug"));
// $(cardHeads).each((i, el) => {
//    console.log($(el).find("h1").text());
//    var dataSlug = ($(el).parent().attr("data-slug"));
//    var parentNode = $(el).parent();
//    var address = $(parentNode).find(".c-mapstack__address").text();
//    console.log(address);
//    var phoneNumber = $(parentNode).find(".c-mapstack__phone.desktop-only").text();
//    console.log(phoneNumber);
//    var infoText = $(parentNode).find(".c-entry-content").find("p").text();
//    console.log(infoText);
// })
// })

// Connect to the Mongo DB
// mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
