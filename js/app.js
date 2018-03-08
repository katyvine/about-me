'use strict';
// Into

var userName = prompt('Welcome! What is your name?');
console.log (userName);

alert('Hi '+ userName + '! Are you ready to play my guessing game? It\'s about me!');

// Setting Score Keeper
var score = 0;

// // Questions 1-5: Yes or No?

var homeTown = prompt('Am I from Seattle? (yes or no?)').toLowerCase();

if (homeTown === 'yes'){
  alert('Yes! You\'re right!');
  score ++;
  console.log ('Q1 score:' + score);
} else {
  alert('Nope! I\'m from Seattle, the best city to live in.');
}

console.log('Am I from Seattle?: ' + homeTown);

var petQuestion = prompt('Do I have any pets? (yes or no?)').toLowerCase();

if (petQuestion === 'no'){
  alert('Right, no pets. But I really want a dog.');
  score ++;
  console.log ('Q2 score:' + score);
} else { alert('No, no pets. But someday I\'ll get a dog!');
}

console.log('Do I have pets?: ' + petQuestion);

var beerChoice = prompt('I live in Ballard, is Stoup my favorite Ballard Brewery? (yes or no?)').toLowerCase();

if (beerChoice === 'no'){
  alert('Nailed it! I like Reuben\'s the best.');
  score ++;
  console.log ('Q3 score:' + score);
} else {alert('Nope, I like Reuben\'s more.');
}

console.log('Do I like Stoup?: ' + beerChoice);

var missingContinent = prompt('I have been to 5 of 7 continents. Is Australia one that I am missing? (yes or no?)').toLowerCase();

if (missingContinent === 'no'){
  alert('You got it! I have been there, but not to Asia or Antartica');
  score ++;
  console.log ('Q4 score:' + score);
} else { alert('Try again, I haven\'t been to Asia or Antartica');
}

console.log('Have I been to Antartica?: ' + missingContinent);

var schoolQuestion = prompt('Did I go to the University of Washington? (yes or no)').toLowerCase();

if (schoolQuestion === 'yes'){
  alert('Go Dawgs!');
  score ++;
  console.log ('Q5 score:' + score);
} else {alert('Nope, I did give all my money to the University of Washington. Woof!');
}

console.log('Did I go to UW?: ' + schoolQuestion);

// //Question 6: Numeric Imput: I spent 17 months travelling, how many countries did i go to? 29

var countryGuessLeft = 4;

while (countryGuessLeft > 0){
  var countryGuess = prompt('I spent 17 months traveling, how many countries did I go to?');
  console.log (countryGuess);

  if (parseInt(countryGuess) === 29) {
    alert('You got it!! Wow!');
    score ++;
    console.log ('Q6 score:' + score);
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
      score ++;
      console.log ('Q7 score:' + score);
      foodGuessLeft = 0;
      break;}
  }

  foodGuessLeft--;

  //TODO: create alert with error message

  if (foodGuessLeft === 0){
    alert ('You are out of guesses sorry. My favorites are: chocolate, cheese, chocolate chip cookies and wine (yes wine is a food!)');
  }
  console.log(foodGuessLeft, 'at bottom of while loop');
}

alert (userName + ', I hope you enjoyed that. You answered ' + score + ' of 7 questions correctly. Please play again soon.');