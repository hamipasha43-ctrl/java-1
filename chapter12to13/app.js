//question1//
var ch = prompt("Enter a character:");

var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("It is a Number");
}
else if (code >= 65 && code <= 90) {
    alert("It is an Uppercase Letter");
}
else if (code >= 97 && code <= 122) {
    alert("It is a Lowercase Letter");
}
else {
    alert("Invalid Input");
}


//question2//
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

if (num1 > num2) {
    alert(num1 + " is larger");
}
else if (num2 > num1) {
    alert(num2 + " is larger");
}
else {
    alert("Both numbers are equal");
}

//question3//
var num = +prompt("Enter a number:");

if (num > 0) {
    alert("Positive Number");
}
else if (num < 0) {
    alert("Negative Number");
}
else {
    alert("Zero");
}

//question4
var ch = prompt("Enter a character:");

if (
    ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
    ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U"
) {
    alert(true);
}
else {
    alert(false);
}

//question5//
var correctPassword = "admin123";
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    alert("Please enter your password");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
}
else {
    alert("Incorrect password");
}

//question6//
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

alert(greeting);


//question7