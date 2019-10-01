"strict mode";
let baseURL = "http://www.omdbapi.com/?apikey=8fd4e703&t=";

// Concatenates the API request.
function urlParse(title){
	let url = baseURL;
	url = url.concat(title);
	return url;
}

function makeCorsReq(title){
	// If the show/movie exists
	let url = urlParse(title);
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	if (!xhr){
		alert("CORS not supported");
		
		return;
	}
	
	//Response Handler
	xhr.onload = function(){
		let responseStr = xhr.responseText; // Get the JSON String
		let object = JSON.parse(responseStr);// Turn it into an onject
		if(object.Response == "True"){
			console.log(object.Title + " " + object.Ratings[0].Value + " " + object.Ratings[1].Value + " " + object.Ratings[2].Value);
		}
		else
		{}
	};
	
	xhr.onerror = function(){
			alert("Error retrieving title");
	}
	
	xhr.send();
}// makeCorsReq
let shows = document.getElementsByTagName("button");
console.log(shows.length);
console.log(shows);
for(let i = 0; i < shows.length; i++){
	console.log(shows[i].getAttribute("aria-label"));
}
