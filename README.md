# LIRI_Bot
A Language Interpretation and Recognition Interface

## Description
This app will take arguments from the node command line and use those arguments to call various API's, allowing the user to see upcoming shows for a band of their choice, see the top five results for a search on spotify, or see movie information pulled from the OMDB

### API's Used
    - Node-Spotify-API
    - BandsInTown   
    - OMDB

### NODE PACKAGES USED
    - axios
    - node fs
    - dotenv
#### PROJECT USAGE
This program is used by entering one of the pre-defined commands, followed by a single or multi-word argument. The commands are as follows: 
Command Header | Command Functionality
---------------|----------------------
spotify-this-song <SONG NAME> | Returns the top 5 search results from spotify & prints them to the console
concert-this <BAND NAME> | Returns the next 5 shows this band is playing, specifically the venue name, location, and the date of the show
movie-this <MOVIE NAME> | Returns the first result from OMDB, and prints it to the console
do-what-it-says <NO ARGUMENT> | Pulls a command and an argument from a txt file (random.txt), and executes the contained command with the contained argument




