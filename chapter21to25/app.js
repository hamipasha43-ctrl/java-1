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
 
var value = "472";

document.write("Value: " + value + "<br>");
document.write("Type: " + typeof value + "<br>");

var number = Number(value);

document.write("Value: " + number + "<br>");
document.write("Type: " + typeof number);

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


//question num 12
var num = 35.36;

document.write("Number: " + num + "<br>");

var result = num.toString().replace(".", "");

document.write("Result: " + result);

//question num 13
var username = prompt("Enter your username:");

var specialSymbols = ["@", ".", ",", "!"];

for (var i = 0; i < specialSymbols.length; i++) {
    if (username.includes(specialSymbols[i])) {
        alert("Please enter a valid username");
        break;
    }
}
//question num 14


//question num 15

//(A)
var password = prompt("Enter your password:");

var hasAlphabet = false;
var hasNumber = false;

for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        hasAlphabet = true;
    }

    if (code >= 48 && code <= 57) {
        hasNumber = true;
    }
}

if (hasAlphabet && hasNumber) {
    alert("Valid Password");
} else {
    alert("Password must contain alphabets and numbers");
}

//(B)
var password = prompt("Enter your password:");

var code = password.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("Password can not begin with a number");
} else {
    alert("Valid Password");
}


//(C)
var password = prompt("Enter your password:");

var code = password.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("Password can not begin with a number");
} else {
    alert("Valid Password");
}

//question num 16
var university = "University of Karachi";

var arr = university.split(" ");

document.write(arr);

//question num 17
var userInput = prompt("Enter your input:");

var lastCharacter = userInput.charAt(userInput.length - 1);

document.write("User input: " + userInput + "<br>");
document.write("Last character of input: " + lastCharacter);

//question num 18


var text = "The quick brown fox jumps over the lazy dog";

var count = text.toLowerCase().split("the").length - 1;

document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");
