//QUESTION NUM 1//
let arr = [[], []];

console.log(arr);

//QUESTION NUM 2//
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(matrix);


//QUESTION NUM 3//
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//QUESTION NUM 4//
let num = +prompt("Enter table number:");
let length = +prompt("Enter table length:");

for (let i = 1; i <= length; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
//QUESTION NUM 5//

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//QUESTION NUM 6//
// A//
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

//B//
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
//C//
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
//D//
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
//E//
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}



//QUESTION NUM 7//
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("What do you want to search?");

var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] === search) {
        found = true;
        break;
    }
}

if (found) {
    alert(search + " is found in the list.");
} else {
    alert(search + " is not found in the list.");
}
//QUESTION NUM 8//

var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

console.log("Largest number is: " + largest);
//QUESTION NUM 9//
var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
console.log("Smallest number is: " + smallest);


//QUESTION NUM 10//
for (var i = 5; i <= 100; i += 5) {
    console.log(i);
}
