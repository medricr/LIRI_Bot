// set any enviroment variables with the dotenv package
require("dotenv").config();
// get they keys from keys.js
var keys = require("./keys.js");
// link spotify
var spotify = new spotify(keys.spotify);

console.log(spotify);

// grab the user command
var user_command = process.argv[2];
// grab the command argument
var command_arg = process.argb[3];

//LIRI FUNCTIONS
// **********************************************
function concert_this(arg){
    // some code
}

function spotify_this(arg){
    // some code
}

// LIRI PARSING LOGIC
// **********************************************
switch(user_command){
    case "concert-this":

}
