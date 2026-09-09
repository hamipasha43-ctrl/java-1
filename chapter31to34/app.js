//QUESTION NUM 1//
var rightNow = new Date();

document.write(rightNow);


//QUESTION NUM 2//
var rightNow = new Date();

var month = rightNow.getMonth();

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

alert("Current month: " + months[month]);



//QUESTION NUM 3//
var rightNow = new Date();

var day = rightNow.getDay();

var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

alert("Today is " + days[day].slice(0, 3));
//QUESTION NUM 4//

var rightNow = new Date();

var day = rightNow.getDay();

if (day === 0 || day === 6) {
    alert("It's Fun day");
}
//QUESTION NUM 5//



var rightNow = new Date();

var date = rightNow.getDate();

if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}
//QUESTION NUM 6//
var rightNow = new Date();

var elapsedMilliseconds = rightNow.getTime();

elapsedMinutes = elapsedMilliseconds / (1000 * 60);

document.write("Elapsed minutes since January 1, 1970: " + elapsedMinutes);
//QUESTION NUM 7//
var rightNow = new Date();

var hours = rightNow.getHours();

if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
//QUESTION NUM 8//
var laterDate = new Date(2020, 11, 31);

document.write("Later date: " + laterDate);
//QUESTION NUM 9//
var ramadan = new Date("June 18, 2015");
var today = new Date();

var difference = today - ramadan;

var days = Math.floor(difference / (1000 * 60 * 60 * 24));

alert(days + " days have passed since 1st Ramadan, 2015");



//QUESTION NUM 10//



var referenceDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500");
var beginningOf2015 = new Date("Jan 01, 2015");

var difference = referenceDate - beginningOf2015;
var seconds = Math.floor(difference / 1000);

document.write(seconds + " seconds had passed since beginning of 2015");




//QUESTION NUM 11//

var date = new Date();

var hours = date.getHours();

date.setHours(hours - 1);

document.write("1 hour ago, it was " + date);


//QUESTION NUM 12//


var date = new Date();

alert("Current date: " + date);

date.setFullYear(date.getFullYear() - 100);

alert("100 years back, it was: " + date);

//QUESTION NUM 13//
var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear);


//QUESTION NUM 14//