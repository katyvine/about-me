'use strict';

// IF ESLSE

var homeTown = prompt('Where am I from?').toLowerCase();

if (homeTown === 'seattle'){
  alert('Yes! You\'re right!');
} else {
  alert('Nope! I\'m from Seattle, the best city to live in.');
}

console.log('Home town guess: ' + homeTown);

var favoriteTeam = prompt('What is my favorite Seattle sports team?').toLowerCase();

if (favoriteTeam === 'seahawks'){
  alert('Yes, and you also would have been right if you guessed the Sounders or all Husky sports.');
} else if (favoriteTeam === 'sounders'){
  alert('Yes, and you also would have been right if you guessed the Seahawks or all Husky sports.');
} else if (favoriteTeam === 'huskies'){
  alert('Yes, and you also would have been right if you guessed the Seahawks or Sounders.');
} else { alert('Good guess, but no.');
}

console.log('Favorite team guess: ' + favoriteTeam);

var beerChoice = prompt('I live in Ballard, what\'s my favorite Ballard Brewery?').toLowerCase();

if (beerChoice === 'ruben\'s'){
  alert('Nailed it!');
} else {alert('Nope, I like Ruben\'s more.');
}

console.log('Ballard Brewery guess: ' + beerChoice);

var missingContinent = prompt('I have been to 5 of 7 continents. Can you guess one of the 2 I haven\'t been to?').toLowerCase();

if (missingContinent === 'asia'|| missingContinent === 'antartica'){
  alert('You got one!');
} else { alert('try again');
}

console.log('One of my two missing continent guesses: ' + missingContinent);

var schoolQuestion = prompt('Where did I go to college? Please type the full name, no abbreviation.').toLowerCase();

if (schoolQuestion === 'university of washington'){
  alert('Go Dawgs!');
} else {alert('Nope, I gave all my money to the University of Washington. Woof!');
}

console.log('Where I went to school guess: ' + schoolQuestion);