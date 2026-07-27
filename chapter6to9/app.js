//question1//

var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br><br>");
document.write("--------------------------------<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);

//Question2//

var a = 2, b = 1;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br><br>");

document.write("--a = " + (--a) + "<br>");

a = 2;
b = 1;
document.write("--a - --b = " + (--a - --b) + "<br>");

a = 2;
b = 1;
document.write("--a - --b + ++b = " + (--a - --b + ++b) + "<br>");

a = 2;
b = 1;
var result = --a - --b + ++b + b--;

document.write("--a - --b + ++b + b-- = " + result + "<br><br>");

document.write("Final value of a is: " + a + "<br>");
document.write("Final value of b is: " + b + "<br>");
document.write("Result is: " + result);


/JavaSceipt//
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

//Explanation//

a = 2
b = 1

--a
= 1
(a becomes 1)

--a - --b
= 1 - 0
= 1
(b becomes 0)

--a - --b + ++b
= 1 - 0 + 1
= 2
(b becomes 1)

--a - --b + ++b + b--
= 1 - 0 + 1 + 1
= 3
(b becomes 0 after b--)

//final values//
a is 1
b is 0
result is 3


//Question3//
var name = prompt("Enter your name:");
alert("Welcome " + name + "!");


//Question4//
var num = prompt("Enter a number for multiplication table:", 5);

document.write("<h2>Multiplication Table of " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
//Question5 and 6//
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarks = 100;

var marks1 = +prompt("Enter obtained marks of " + sub1 + ":");
var marks2 = +prompt("Enter obtained marks of " + sub2 + ":");
var marks3 = +prompt("Enter obtained marks of " + sub3 + ":");

var totalObtained = marks1 + marks2 + marks3;
var grandTotal = totalMarks * 3;
var percentage = (totalObtained / grandTotal) * 100;

document.write("<table border='1' cellspacing='0' cellpadding='8'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + (marks1 / totalMarks * 100).toFixed(2) + "%</td></tr>");

document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + (marks2 / totalMarks * 100).toFixed(2) + "%</td></tr>");

document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + (marks3 / totalMarks * 100).toFixed(2) + "%</td></tr>");

document.write("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");

document.write("</table>");

