// Task1- Empolyee merge sysytam (spread operator )

let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 };
let empPromotion = { role: "Developer", bonus: 10000 };//


let finalEmployee = {
  ...empBasic,
  ...empPromotion,
  salary: 40000,
  experience: "2 years"
};

console.log(finalEmployee);
 
//Requirements://


// 1. Merge objects
let employee = { ...empBasic, ...empPromotion };

// 2. Update salary
employee.salary = 40000;

// 3. Add experience
employee.experience = "2 years";

// 4. Print final object
console.log(employee); 


// Task2- Shopping cart (Spread + Array methods)

let cart1 = ["Shoes", "Shirt"];
let cart2 = ["Watch", "Cap"];//

let finalalCart = ["Socks", ...cart1, ...cart2, "Bag"];
console.log(finalCart);
 
//Requirements://

// 1. Merge carts
let finalCart = [...cart1, ...cart2];

// 2. Add "Bag" at end
finalCart.push("Bag");

// 3. Add "Socks" at beginning
finalCart.unshift("Socks");

// 4. Print final cart
console.log(finalCart);

// Task3- Rest operator Salary calculator

Create function:
calculateTotalSalary(baseSalary, ...bonuses) //




function calculateTotalSalary(baseSalary, ...bonuses) {
    let totalBonus = bonuses.reduce((sum, bonus) => sum + bonus, 0);
    return baseSalary + totalBonus;
}

let result = calculateTotalSalary(30000, 2000, 3000, 5000);
console.log("Total Salary:", result);

// Task4- Advanced Destructuring//

//let student = {
  newname: "Rahul",
  marks: { maths: 90, science: 85, english: 88 }
}//

 
//Requirements://

// 1. Destructure name
let { name } = student;

// 2. Destructure marks
let{ maths, science, } = student.marks;

// 3. Print values
console.log(student.newname);
console.log(`${student.newname} scored ${maths} in maths and ${science} in science`);

// Task5- Array Manipulation //

let numbers = [10, 20, 30, 40, 50];

//Requirements://

// Remove 30 and add 25
numbers.splice(2, 1, 25);

// Reverse array
numbers.reverse();

// Check if 50 exists
console.log(numbers.includes(50));

// Print final array
console.log(numbers);

// Task6- Flatten Data//
let apiData = [1,2,[3,4,[5,6,[7,8]]]];

//Requirements://
// convert into  single array
let flattenedData = apiData.flat(Infinity);

// Print output
console.log(flattenedData);


// find index of 6:
let indexOf6 = flattenedData.indexOf(6);
console.log("Index of 6:", indexOf6);

// Task7- Sorting problem//

 let prices = [100, 5, 25, 300, 45];

//Requirements://

// Sort in Ascending order properly
prices.sort((a, b) => a - b);
console.log ("Ascending:",prices);

// Sort in Descending order properly
prices.sort((a, b) => b - a);
console.log("Descending:", prices);

// BONUS HARD TASK- Team level
let users = [
  {name: "A", salary: 20000},
  {name: "B", salary: 40000},
  {name: "C", salary: 30000}
]//

let updatedUsers = users.map(user => ({
  ...user,
  salary: user.salary + 5000
}));

updatedUsers.sort((a, b) => b.salary - a.salary);

console.log(updatedUsers);
//Requirements://
// 1. Increase everyone by 5000 using spread
let updatedUsers = users.map(user => ({
    ...user,
    salary: user.salary + 5000
}));
// 2. Return upadated array
updatedUsers.sort((a, b) => b.salary - a.salary);

//3. Sort based on salary (high to low)
console.log(updatedUsers);



