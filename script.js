$(document).ready(function() {

	// Geolocation function
	function geolocate(showLoc, errHandler) {
		// check if the browser can handle geolocation; if so, look up location
		if(navigator.geolocation)
			navigator.geolocation.getCurrentPosition();
		else
			alert("I'm sorry, but your browser doesn't support geolocation.")
	}

	// geolocation error handler from lec1
	function errHandler(err) {
		switch(err.code) {
			case err.PERMISSION_DENIED:
				alert("This page is not allowed to view your position. Message: " + err.message);
				break;
			case err.POSITION_UNAVAILABLE:
				alert("Your position is not available for some reason. Message: " + err.message);
				break;
			case err.TIMEOUT:
				alert("Timeout when determining your location.");
				break;
			default:
				alert("An unknown error occurred. Message: " + err.message);
		}
	}

	// Callback function
	function showLoc(loc) {
		// Display the user's location
		console.log("Displaying geolocation...");
		document.getElementById("currentloc").innerHTML = 
			"Latitude: " + loc.coords.latitude + "<br />" +
			"Longitude: " + loc.coords.longitude + "<br />";
	}

	// Geocoding function

	// Retrieve news and append to index.html

	// Retrieve weather and append to index.html



});