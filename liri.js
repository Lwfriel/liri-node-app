require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var moment = require("moment");
var command = process.argv[2];
var request = require("request");

if (command === "concert-this") {
    var artist = process.argv[3];

 request ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp");

 console.log(venue); 
 console.log(location);
 console.log(date);
};

if (command === "movie-this") {
    var movie = process.arg[3];
request("http://www.imdb.com/title/tt0485947/");
console.log(title);
console.log(year);
console.log(IMDBRating);
console.log(rottenTomatoesRating);
console.log(country);
console.log(language);
console.log(plot);
console.log(actors);

}