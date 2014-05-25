if ("WebSocket" in window) {
	// This automatically attempts a connection with our pictionary
	// server.
	var ws = new WebSocket("ws://127.0.0.1:8000/");
	
	ws.onopen = function() {
        // Web Socket is connected, send data using send()
		console.log("Server connection successful!");

		var name = {command: 'nickname', data: 'Foo'};
		ws.send(JSON.stringify(name));
	};

	ws.onmessage = function (evt) { 
		// message received!

		// We get the JSON as a string from the server - now we need to
		// turn it into a JavaScript object
		var data = JSON.parse(evt.data);
		
		switch(data.command) {
			case 'game_update':
				// This contains the updated game state, let's fill
				// out the pieces of the UI that we ought to
			    console.log("Updating the game");
			    break;
			case 'become_artist':
				// You just became the artist!
			    console.log("you've become the artist");
			    break;
			case 'end_artist':
				// You just became the artist!
			    console.log("you're done being the artist!");
			    break;
			default:
			    console.log(data);

		}
	};

	ws.onclose = function(){ 
		// websocket is closed.
		console.log('connection is closed');
	};

	$(document).on('ready', function() {
		// Anything that needs to wait until the document has loaded
		// should go on in here.
	});

	function sendGuess() {
		ws.send(JSON.stringify({
			command: 'guess',
			data: 'amazeballs'
		}));
	}

	function sendCanvas() {
		ws.send(JSON.stringify({
			command: 'draw',
			data: 'canvas stuff'
		}));
	}

} else {
	alert("WebSocket NOT supported by your Browser!");
}