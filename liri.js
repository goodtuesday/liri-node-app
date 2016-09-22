
// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require('request');

// Store all of the arguments in an array 
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

var spotify = require('spotify');

var song= "";





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

// if no input, returns imdb data for Mr Nobody
if (movieName==""){

	movieName="mr nobody";
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

    console.log(data);

});

};