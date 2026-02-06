//Part 1 – Logical & Ternary Operator//

/* 1. Check whether a number is between 10 and 50 using logical AND.

Input: let num = 25

Output: "Valid Number" or "Invalid Number"*/

letnum = 25
if (num >= 10 && num <= 50) {
    console.log("Valid Number");

} else {
    console.log("Invalid Number");
}

// Explanation:
// The logical AND (&&) checks both conditions. If the number is greater than or equal to 10 and less than or equal to 50, it is valid.
  
// 2.Login check using logical AND //
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Allowed");
} else {
    console.log("Access Denied");
}


// Explanation:
// Login is allowed only when both username and password match the given values.

// 3. Even or Odd using ternary //
let number = 7;
console.log(number % 2 === 0 ? "Even" : "Odd");


// Explanation:
// The ternary operator checks the condition in one line and returns the result.

// 4. Find the output //
console.log((10 === "10") || (5 > 2) && !(3 < 1));


// Explanation step by step:

// 10 === "10" = false (different data types)

// 5 > 2 = true

// 3 < 1 = false

// !false = true

// true && true = true

// false || true = true

// Final Output: true

// --Part 2 – Type Conversion //

// 5.find the output explain //
console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5


// Explanation:
// + joins values when a string is involved.
// Other operators automatically convert the string to a number.

// 6:  Convert the following using Explicit Conversion //
let value = "100";

console.log(Number(value));   // 100
console.log(Boolean(value));  // true


// Explanation:

// Number() converts string to number

// Non-empty string becomes true in Boolean

// 7.   what  wil be the Boolean values
console.log(Boolean(""));   // false
console.log(Boolean(" "));  // true
console.log(Boolean(0));    // false
console.log(Boolean([]));   // true


// Explanation:

// Empty string and zero are false

// Space string and array are considered true in JavaScript

//----Part 3 – Conditional Statements //

// 8.  write Grade a Program
let marks = 78;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 9. Traffic Signal program using switch case//
let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

// 10.  (Nested if): Check eligibility//
let age = 20;
let height = 165;
let weight = 55;

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Selected");
        } else {
            console.log("Weight condition failed");
        }
    } else {
        console.log("Height condition failed");
    }
} else {
    console.log("Age condition failed");
}

// ------Part 4 – Loops// 

// 11. Print numbers from 1 to 20 using for lopp //
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 12. Print only odd numbers from 1 to 20// 
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 13. using  While loop 
//print nubers from(10 to 1)//
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// 14. using  Do-while loop   print numbers from 1 to 5//
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// 15. for-of loop print each character of the string "STACKLY"//
let word = "STACKLY";

for (let ch of word) {
    console.log(ch);
}

// 16. for-in loop print the keys and values of the object student//
let student = {
    name: "Arun",
    course: "MERN",
    duration: "6 months"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}

// Real-Time Questions
// RT1. Login System
let user = "admin";
let pass = "1234";

console.log(
    user === "admin" && pass === "1234"
        ? "Login Success"
        : "Invalid Credentials"
);

//  RT2. Salary Bonus system
let salary = 60000;
let experience = 4;

if (salary > 50000 && experience > 3) {
    console.log("Eligible for bonus");
} else {
    console.log("Not eligible");
}

//  RT3. Shopping Discount
let amount = 3500;

if (amount >= 5000) {
    console.log("20% Discount");
} else if (amount >= 2000) {
    console.log("10% Discount");
} else {
    console.log("No Discount");
}

//  RT4. Even Number Counter
let count = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("Even numbers:", count);

//  RT5 . Dynamic Greeting
let hour = 18;

if (hour >= 1 && hour <= 6) {
    console.log("Good Morning");
} else if (hour <= 12) {
    console.log("Morning");
} else if (hour <= 16) {
    console.log("Good Afternoon");
} else if (hour <= 19) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}

