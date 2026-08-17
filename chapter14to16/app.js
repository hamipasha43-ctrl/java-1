//question1//

var studentNames = [];

//question2//
var studentNames = new Array();

//question3//
var names = ["hameem", "Aqsa", "Sara", "Ayesha"];
//question4//
var numbers = [10, 20, 30, 40, 50];

//question5//
var status = [true, false, true, false];
//question6//
var mixedArray = ["Hameem", 23, true, "Pakistan", 50];

//question7//
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("Qualifications:<br><br>");

document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br>");
//question8//
var students = ["hadi", "abdullah", "mohsin"];

var scores = [320, 230, 480];

var totalMarks = 500;

var percentage1 = (scores[0] / totalMarks) * 100;
var percentage2 = (scores[1] / totalMarks) * 100;
var percentage3 = (scores[2] / totalMarks) * 100;

document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + percentage1 + "%<br>");
document.write("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + percentage2 + "%<br>");
document.write("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + percentage3 + "%");
//question9//
//question10//
var scores = [320, 230, 480, 120];

document.write("Scores of Students: " + scores + "<br>");

scores.sort(function(a, b) {
    return a - b;
});

document.write("Ordered Scores of Students: " + scores);

//question11//
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("Cities list:<br>");
document.write(cities + "<br><br>");

var selectedCities = cities.slice(2, 4);

document.write("Selected cities list:<br>");
document.write(selectedCities);
//question12//
var arr = ["This", "is", "my", "cat"];

var singleString = arr.join(" ");

document.write(singleString);
//question13//

var arr = [];

arr.push("Apple");
arr.push("Banana");
arr.push("Mango");
arr.push("Orange");

document.write("Array: " + arr + "<br><br>");

document.write("First value: " + arr.shift() + "<br>");
document.write("Second value: " + arr.shift() + "<br>");
document.write("Third value: " + arr.shift() + "<br>");
document.write("Fourth value: " + arr.shift());
