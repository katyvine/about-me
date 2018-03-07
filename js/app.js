'use strict';

// IF ELSE

var homeTown = prompt('Am I from Seattle? (yes or no?)').toLowerCase();

if (homeTown === 'yes'){
  alert('Yes! You\'re right!');
} else {
  alert('Nope! I\'m from Seattle, the best city to live in.');
}

console.log('Am I from Seattle?: ' + homeTown);

var favoriteTeam = prompt('Is my favorite Seattle Sports team the Seahawks? (yes or no?)').toLowerCase();

if (favoriteTeam === 'yes'){
  alert('Yes, and you also would have been right if I had asked about the Sounders or all Husky sports.');
} else { alert('I do love Seahawks, but also the Sounders and all Husky sports');
}

console.log('Favorite team is Seahawks?: ' + favoriteTeam);

var beerChoice = prompt('I live in Ballard, is Stoup my favorite Ballard Brewery? (yes or no?)').toLowerCase();

if (beerChoice === 'no'){
  alert('Nailed it! I like Reuben\'s the best.');
} else {alert('Nope, I like Reuben\'s more.');
}

console.log('Do I like Stoup?: ' + beerChoice);

var missingContinent = prompt('I have been to 5 of 7 continents. Is Australia one that I am missing? (yes or no?)').toLowerCase();

if (missingContinent === 'no'){
  alert('You got it! I have been there, but not to Asia or Antartica');
} else { alert('Try again, I haven\'t been to Asia or Antartica');
}

console.log('Have I been to Antartica?: ' + missingContinent);

var schoolQuestion = prompt('Did I go to the University of Washington? (yes or no)').toLowerCase();

if (schoolQuestion === 'yes'){
  alert('Go Dawgs!');
} else {alert('Nope, I did give all my money to the University of Washington. Woof!');
}

console.log('Did I go to UW?: ' + schoolQuestion);