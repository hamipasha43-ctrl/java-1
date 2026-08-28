//Question num 1 //


var FirstName =prompt("enter your first name:");
var lastName =prompt("enter your last name:");
 var fullName = FirstName + "hami" lastName;
 alert("Hello" + fullName + "hamipasha");

 //question num 2//
 var mobileModel = prompt("enter your favroite mobile phone model:");
 var length = mobileModel.length;
 document.write("my favroite mobile phone is :" + mobileModel + "<br>");
 document.write("length of input:" +length);
 
 //question num 3//
 var word = "Pakistani";

var index = word.indexOf("n");

document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);

 //question num 4//
 var word = "Hello World";

var index = word.lastIndexOf("l");

document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + index);

 //question num 5//
 var word = "Pakistani";
var character = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + character);

 //question num 6//
 var FirstName =prompt("enter your first name:");
var lastName =prompt("enter your last name:");
 var fullName = FirstName + "hami" lastName;
 alert("Hello" + fullName + "hamipasha");

 //question num 7//
 var city = "Hyderabad";

var result = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement: " + result);

 //question num 8//
 var message = "Alisha and Samiya are best friends. They play cricket and football together.";
var result = message.replace(/and/g, "&");

document.write(result);
 //question num 9//
 //question num 10//
 var userInput = prompt("Enter something:");

var upperCase = userInput.toUpperCase();

document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCase);

//question num 11
var userInput = prompt("Enter something:");

var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1);

document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCase);