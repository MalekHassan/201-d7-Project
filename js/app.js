'use strict';
var username = prompt ('welcome to the game! what is your name?');
console.log('User answer was ' + username);
alert ('Welcome ' + username + '! hope you\'ll answer them all correct!');

var answer1 = prompt('Is My Name Aya?');
console.log('User answer was ' + answer1.toLowerCase());
if (answer1.toLowerCase() == 'yes' ) {
  alert ('Bravoo! you know my name');
  console.log('Correct Answer');

} else {
  alert ('Oops! you don\'t know my name');
  console.log('Wrong answer');
}


var answer2 = prompt('Do I love my old job (Project Engineer) ?');
console.log('User answer was ' + answer2.toLowerCase());

if (answer2.toLowerCase() == 'yes') {
  alert ('Bravoo! I really love Projects!');
  console.log('Correct Answer');

} else {
  alert ('Oops! I do love project engineering');
  console.log('Wrong answer');
}


var answer3 = prompt ('Do I manage the content of my repositories or someone else do it for me?');
console.log('User answer was ' + answer3.toLowerCase());

if (answer3.toLowerCase() === 'yes') {
  alert ('yeah I manage them by myself!');
  console.log('Correct Answer');
} else {
  alert ('that\'s impossible to let someone manage my repo ;)');
  console.log('Wrong answer');
}

var answer4 = prompt ('will I leave project engineering and stack with only programming??');
console.log('User answer was ' + answer4.toLowerCase());

if (answer4.toLowerCase() === 'yes') {
  alert ('No! I want to combine between them both');
  console.log('Correct Answer');
} else {
  alert ('Sure i will not, I love them both');
  console.log('Wrong answer');
}

var answer5 = prompt ('Did I studied in stanford university?');
console.log('User answer was ' + answer5.toLowerCase());

if (answer5.toLowerCase() === 'yes') {
  alert ('No, it is University Of Jordan');
  console.log('Correct Answer');
} else {
  alert ('exactly! it was University Of Jordan ');
  console.log('Wrong answer');
}

alert ('Good Job ' + username + '!');
