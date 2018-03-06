'use strict';

// IF ESLSE

var petQuestion = parseInt(prompt('How many pets do you think I have?'));

if(petQuestion === 2) {
  alert('correct!');
} else {
  alert('nope!');
}

var myAge = prompt('Do you think I\'m older than 30? Please enter "yes" or "no"').toLowerCase();

// 'yes

if (myAge === 'yes'){
  alert('That is correct!');
} else {
  alert('No, I am older');
}