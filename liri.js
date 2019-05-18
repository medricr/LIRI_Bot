// set any enviroment variables with the dotenv package
require("dotenv").config();
// require spotify
var Spotify = require("node-spotify-api");
// require axios
var axios = require("axios");
// require fs
var fs = require("fs");
// get they keys from keys.js
var keys = require("./keys.js");
// create a spotify var based with the spotify-api constructor
var spotify = new Spotify(keys.spotify);
// grab the user command
var user_command = process.argv[2];
// then, we grab everyting after the user command, and slice it into a string, which will be our command argument
if(process.argv.length > 4){
    var command_arg = process.argv.slice(3).join(" ");
}
//LIRI FUNCTIONS
function concert_this(arg){
    // some code
    var query_url = "https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp"
    axios.get(query_url).then(function(response){
        // console.log(response.data);
        var show = response.data;
        console.log("-----------------\nUpcoming Concerts\n--------------------");
        for(let i = 0; i < 5; i++){
            console.log("Venue: " + show[i].venue.name + "\nVenue Location: " + show[i].venue.city + ", " + show[i].venue.country + "\nDate: " + show[i].datetime + "\n-----------------------\n");
        }
    })
}
function spotify_this(arg){
    spotify.search({type: "track", query: arg, limit: 5}, function(err,data){
        if(err){
            console.log("error occured " + err)
        }
        var item_array = data.tracks.items
        console.log("\n--------------\nTop 5\n--------------\n");
            for(entries in data.tracks.items){
                
                console.log(item_array[entries].artists[0].name + "\n" + item_array[entries].name + "\n" + item_array[entries].preview_url + "\n" + item_array[entries].album.name + "\n-----------------------\n");
            }
    })
}
function movie_this(arg){
    var query_url = "http://www.omdbapi.com/?t=" + arg + "&y=&plot=short&apikey=trilogy";
    axios.get(query_url).then(function(response){
        var movie = response.data;
        console.log("----------------------\nTitle: " + movie.Title + "\nRelease Year: " + movie.Year + "\nIMDB Rating: " + movie.imdbRating + "\nRT Rating: " + movie.Ratings[1].Value + "\nCountry: " + movie.Country + "\nLanguage: " + movie.Language + "\nPlot: " + movie.Plot + "\nActors: " + movie.Actors);
    })
}
function do_it(){
    console.log("do it fire");
     fs.readFile("./random.txt","utf8",function(err,contents){
        var arg = contents.split(", ")
        user_command = arg[0];
        command_arg = arg[1];
        parse_and_run();
     })
}
// LIRI PARSING LOGIC
function parse_and_run(){
switch(user_command){
    case "concert-this":
        if(command_arg == undefined){command_arg = "shannon and the clams";}
        concert_this(command_arg);
        break;
    case "spotify-this-song":
        if(command_arg == undefined){command_arg = "money";}
        spotify_this(command_arg);
        break;
    case "movie-this":
        if(command_arg == undefined){command_arg = "mr. nobody";}
        movie_this(command_arg);
        break;
    case "do-what-it-says":
        do_it();
        break;
    default: 
        console.log("INVALID COMMAND | PLEASE RE-ENTER");
        break;
}
}
parse_and_run();