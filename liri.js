// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require('request');

// Store all of the arguments in an array 
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

var spotify = require('spotify');

var song= "";

var Twitter = require('twitter');

var fs = require('fs');

if(process.argv[2]=="movie-this"){



// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i=3; i<nodeArgs.length; i++){

	if (i>3 && i< nodeArgs.length){

		movieName = movieName + "+" + nodeArgs[i];

	}

	else {

		movieName = movieName + nodeArgs[i];
	}
}

// if no input, returns imdb data for Mr. Nobody!
if (movieName==""){

	movieName="mr Nobody";
}

// Then run a request to the OMDB API with the movie specified 
var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

// This line is just to help us debug against the actual URL.  
console.log(queryUrl);

request(queryUrl, function (error, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!error && response.statusCode == 200) {

		   var json = JSON.parse(body);

	   console.log("Title: " +json.Title);
	   console.log("Year: " +json.Year); 
	   console.log("IMDB Rating: " +json.imdbRating); 
	   console.log("Country: " +json.Country); 
	   console.log("Language: " +json.Language); 
	   console.log("Plot: " +json.Plot);
	   console.log("Actors: " +json.Actors); 
	}
});
}


// if the second element of node arg is "spitify-this-song" 
else if (process.argv[2]=="spotify-this-song"){

	for (var i=3; i<nodeArgs.length; i++){

	if (i>3 && i< nodeArgs.length){

		song = song + "+" + nodeArgs[i];

	}

	else {

		song = song + nodeArgs[i];
	}
}

spotify.search({ type: 'track', query: song }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 

   console.log("Artist Name: " + data.tracks.items[0].artists[0].name);

});
}

// if the second element of node arg is "my-tweets" 

else if(process.argv[2]=="my-tweets"){

//I couldn't get this from the keys,js file so I just put it inside my liri.js file
	var twitterKeys = new Twitter( {
  consumer_key: 	"",
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
});
	 
	var params = {screen_name: 'ETSieversEsq'};
	
twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("Latest Tweet: " + tweets[0].text);
    console.log("Recent Tweet: " + tweets[1].text);
    console.log("Recent Tweet: " + tweets[2].text);
    console.log("Recent Tweet: " + tweets[3].text);
    console.log("Recent Tweet: " + tweets[4].text);
    console.log("Recent Tweet: " + tweets[5].text);
	    }
	  
	});

};
