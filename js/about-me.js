var moment = require('moment');

var firstName = 'Nathan';
var lastName= 'Carpenter';
var fullName = firstName + ' ' + lastName;
var email = 'nathan.carpenter03@gmail.com';
var grewUpInCity = true;
var numYearsInCollege = 4;
var numPets = 1;
var numHoursSleepAvg = 7.5;
var favMusicGenre= 'trance';
var favShowsAndMovies = ['Breaking Bad', 'Game of Thrones', 'The Wire', 'Pulp Fiction'];
var jobTitleIn5Years;
var lifeWithoutJS = null;

// Adventure Mode

// var graduationDate = new Date(graduationYear);

// var graduationDate = new Date();
// graduationDate.setFullYear(2005);
// graduationDate = graduationDate.getFullYear();

// Epic Mode

var graduationDate = moment().format('2005');


console.log (firstName, lastName, fullName, email, grewUpInCity, numYearsInCollege, numPets, numHoursSleepAvg, favMusicGenre, favShowsAndMovies, jobTitleIn5Years, lifeWithoutJS, graduationDate);

