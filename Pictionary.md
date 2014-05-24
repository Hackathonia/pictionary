# Hackathon Day: Pictionary!

## Our Rules of Play

Pictionary is a group game in which one player (the "artist") is presented with a random word that they must communicate to the other players via a drawing. The other players attempt to guess the hidden word, with the first person to get it right winning a round.

### Game Rounds

A single game round is the length of time from when an artist is chosen, to when their word is guessed, or 5 minutes (whichever comes first).

At the end of a round, a new artist is chosen from the group (preferably selecting players so that each player has the chance to play the artist during a game).

A game ends after 10 rounds.

### Points

When a word is guessed, 10 points are awarded to the artist and 10 points are awarded to the first player who guessed the word. If the round elapses without the word being guessed, no points are awarded.


### Winning Criteria
The player with the most points at the end of 5 rounds is the winner of the game.

## Technologies

We'll be creating this as a modern web app. We'll be using:

* JavaScript/HTML5/CSS (client-side interface/programming)
* Python (server-side programming)

## End of Hackathon Loot

We'll have a fully functioning (if simplistic) game that abides by the above rules of play.

## Super Basic Requirements

We'll need the following general things to make this work:

1. A game server (Python!) responsible for:
	* Managing player connections
	* Receiving and processing text (guesses & chat) from players
	* Receiving and processing drawing data from artist.
	* Game logic (selecting the artist's random word, selecting the next artist from the group, determining when a round is over, etc.)
	* Keeping track of game state (the number of players, their scores, etc)
	* Updating each connected player on the state of the game
	
2. The user interface (client-side), responsible for:
	* Collecting a user's display name and connecting them to the server (thereby adding them to the game)
	* Collecting guesses/chat text from the player, then sending it to the server
	* Supplying the artist with a drawing canvas and sending that data in JSON back to the server (in real time).
	* Updating all the other players with the drawing information from the artist's canvas (in real time).
	* Displaying (and keeping updated in real time) the list of players, their scores, the current winner.