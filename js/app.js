'use strict';

// // Questions 1-5: Yes or No?

// var homeTown = prompt('Am I from Seattle? (yes or no?)').toLowerCase();

// if (homeTown === 'yes'){
//   alert('Yes! You\'re right!');
// } else {
//   alert('Nope! I\'m from Seattle, the best city to live in.');
// }

// console.log('Am I from Seattle?: ' + homeTown);

// var favoriteTeam = prompt('Is my favorite Seattle Sports team the Seahawks? (yes or no?)').toLowerCase();

// if (favoriteTeam === 'yes'){
//   alert('Yes, and you also would have been right if I had asked about the Sounders or all Husky sports.');
// } else { alert('I do love Seahawks, but also the Sounders and all Husky sports');
// }

// console.log('Favorite team is Seahawks?: ' + favoriteTeam);

// var beerChoice = prompt('I live in Ballard, is Stoup my favorite Ballard Brewery? (yes or no?)').toLowerCase();

// if (beerChoice === 'no'){
//   alert('Nailed it! I like Reuben\'s the best.');
// } else {alert('Nope, I like Reuben\'s more.');
// }

// console.log('Do I like Stoup?: ' + beerChoice);

// var missingContinent = prompt('I have been to 5 of 7 continents. Is Australia one that I am missing? (yes or no?)').toLowerCase();

// if (missingContinent === 'no'){
//   alert('You got it! I have been there, but not to Asia or Antartica');
// } else { alert('Try again, I haven\'t been to Asia or Antartica');
// }

// console.log('Have I been to Antartica?: ' + missingContinent);

// var schoolQuestion = prompt('Did I go to the University of Washington? (yes or no)').toLowerCase();

// if (schoolQuestion === 'yes'){
//   alert('Go Dawgs!');
// } else {alert('Nope, I did give all my money to the University of Washington. Woof!');
// }

// console.log('Did I go to UW?: ' + schoolQuestion);

// //Question 6: Numeric Imput: I spent 17 months travelling, how many countries did i go to? 29

var countryGuessLeft = 4;

while (countryGuessLeft > 0){
  var countryGuess = prompt('I spent 17 months travelling, how many countries did I go to?');
  console.log (countryGuess);

  if (parseInt(countryGuess) === 29) {
    alert('You got it!! Wow!');
    countryGuessLeft = 0;
    break;
  } else if (parseInt(countryGuess) > 29) {
    alert('I went to a lot, but not that many! Try again');
    countryGuessLeft --;
  } else if (parseInt(countryGuess) < 29) {
    alert ('That\'s quite a few, but I went to even more! Try again.');
    countryGuessLeft --;
  }

  if (countryGuessLeft === 0) {
    alert('Sorry you ran out of guesses. I went to 29 countries!');
  }
}



//Question 7: Mulitple Choice: Can you guess what some of my favorite foods are?

var favoriteFoodsArray = ['chocolate', 'cheese', 'chocolate chip cookies', 'wine'];

var foodGuessLeft = 6;

while (foodGuessLeft > 0 ){
  var foodGuess = prompt('Can you guess what some of my favorite foods are?').toLowerCase();
  console.log(foodGuessLeft, 'at top of while loop');

  for(var i = 0; i < favoriteFoodsArray.length; i++){
    console.log(foodGuess);
    if(foodGuess === favoriteFoodsArray[i]) {
      alert ('Yes! My favorites are: chocolate, cheese, chocolate chip cookies and wine (yes wine is a food!)');
      foodGuessLeft = 0;
      break;
    }
  }
  foodGuessLeft--;

  if (foodGuessLeft === 0){
    alert ('You are out of guesses sorry. My favorites are: chocolate, cheese, chocolate chip cookies and wine (yes wine is a food!');
  }
  console.log(foodGuessLeft, 'at bottom of while loop');
}