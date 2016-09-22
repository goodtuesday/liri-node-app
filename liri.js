
// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require('request');

// Store all of the arguments in an array 
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";


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

		
		console.log(body)
	}
});
}

else{

console.log("write more code!")
};