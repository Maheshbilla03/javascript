/* INTERMEDIATE LEVEL - FUNCTIONS FULL
 ASSIGNMENT */

// SECTION 1 – Real-Time Function Logic//

// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

function calculateSalary(basicSalary, bonusPercentage) {
    const bonus = (bonusPercentage / 100) * basicSalary;    
    const grossSalary = basicSalary + bonus;
    const tax = 0.05 * grossSalary;
    const finalSalary = grossSalary - tax;
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Gross Salary:", grossSalary);
    console.log("Tax (5%):", tax);
    console.log("Final Salary:", finalSalary);
    return finalSalary;
}
calculateSalary(30000, 20);  


// 2. Student Result System://

// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object


function generateResult(name, marksArray) {
  let total = 0;
  for (let mark of marksArray) {
    total += mark;
  }
  let average = total / marksArray.length;

  let grade;
  if (average >= 75) {
    grade = "A";
  } else if (average >= 60) {
    grade = "B";
  } else if (average >= 40) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  return {
    name: name,
    total: total,
    average: average,
    grade: grade
  };
}

let result = generateResult("Indu", [70, 80, 65, 85, 70]);
console.log(result);

// SECTION 2 – Scope & Hoisting (Debugging)

// 3. Debug This Code://
function demo(){
if(true){
var a = 10;
let b = 20;
}
console.log(a);
console.log(b);
}

// Questions://

// var a
// var has function scope
// So a is accessible anywhere inside the function
// That’s why console.log(a) works
// let b
// let has block scope
// It exists only inside the { } of the if block
// Outside the block, b does not exist →  error

function demo(){
  let a = 10;
  if(true){
   var b = 20;
  }
  console.log(a);
  console.log(b);
}
demo();

//OR

function demo(){
  if(true){
   var a = 10;
   let b = 20;
   console.log(a);
   console.log(b);
  }
}
demo();

//OR

function demo() {
  let a, b;
  if (true) {
    a = 10;
    b = 20;
  }
  console.log(a);
  console.log(b);
}

demo();


//4. Hoisting Analysis://

// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
//Predict output and explain.

// OUTPUT:
// undefined
// ReferenceError: Cannot access 'y' before initialization  

// EXPLANATION:
// var x
// var declarations are hoisted to the top
// So x exists but has no value yet → prints undefined
// let y
// let is also hoisted, BUT…
// It stays in the Temporal Dead Zone (TDZ) until initialized
// Accessing it before initialization causes an error


//SECTION 3 – Callback & Higher Order (Industry Simulation)//

// 5. Order Processing System://

// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

function processOrder(orderId, callback){
    console.log("Order Processed");
    callback(orderId);
}
function generateInvoice(orderId) {
  console.log("Invoice generated for Order ID:", orderId);
}
processOrder(101, generateInvoice);


// 6. Bank Transaction System://

// Create transaction(amount, type, callback)
// - If deposit --> add
// - If withdraw --> subtract
// - Call sendSMS()

function transaction(amount, type, callback) {
  let balance = 1000;       
    if (type === "deposit") {
        balance += amount;
    }
    else if (type === "withdraw") {
        balance -= amount;
    }
    console.log("Transaction successful. Current Balance:", balance);
    callback();
}
function sendSMS() {
  console.log("SMS sent: Your transaction is successful.");
}   
transaction(180, "deposit", sendSMS);
transaction(200, "withdraw", sendSMS);  


//SECTION 4 – Currying (E-Commerce)//


// 7. Dynamic Price Builder://

// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)

function priceBuilder(basePrice) {
  return function(discount) {
    return function(tax) {
        let discountAmount = (basePrice * discount) / 100;
        let priceAfterDiscount = basePrice - discountAmount;

        let taxAmount = (priceAfterDiscount * tax) / 100;
        let finalPrice = priceAfterDiscount + taxAmount;
        return finalPrice;
    }
  } 
}
const finalPrice = priceBuilder(2000)(15)(18);
console.log("Final Price:", finalPrice);


//SECTION 5 – IIFE (Security + Encapsulation)//

// 8. Secure Company Module://
// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible


const CompanyModule = (function() {
    const companyCode = "ABC123"; 
    function getCompanyStatus() {
        return "Company is operational. Code: " + companyCode;
    }
    return {
        getCompanyStatus: getCompanyStatus
    };
})();
console.log(CompanyModule.getCompanyStatus()); 


//SECTION 6 – Generator (Advanced Logic)


//9. Unique Order ID Generator:
//Generate ORD1001, ORD1002, ORD1003, etc.

function orderIdGenerator() {
    let count = 1000; // private variable

  return function () {
    count++;
    return "ORD" + count;
    }
}
let generator = orderIdGenerator();
console.log(generator()); 
console.log(generator()); 
console.log(generator());


// 10. Coupon Spin System://

// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins.


function* couponSpin() {

    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
    yield "Jackpot";    
}   
const spin = couponSpin();
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);


//SECTION 7 – Mini Project (Integrated)//

// Mini E-Commerce Flow:
// - addToCart(product, price)
// - calculateTotal()
// - applyDiscount() using currying
// - generateCoupon() using generator
// - processPayment() using callback
// - Hide config using IIFE

const ECommerceModule = (function() {
    let cart = [];  
    function addToCart(product, price) {
        cart.push({ product, price });
        console.log(`${product} added to cart at price ${price}`);
    }
    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price, 0);
    }
    function applyDiscount(discount) {
        return function(total) {
            return total - (total * discount / 100);
        }
    }
    function* generateCoupon() {
        yield "10% OFF";
        yield "20% OFF";
        yield "50% OFF";
        yield "No Luck";
        yield "Jackpot";
    }   
    function processPayment(total, callback) {
        console.log(`Processing payment of ${total}...`);
        setTimeout(() => {
            console.log("Payment successful!");
            callback();
        }, 2000);
    }
    return {
        addToCart,
        calculateTotal,
        applyDiscount,
        generateCoupon,
        processPayment
    };
})();
ECommerceModule.addToCart("Laptop", 1000);
ECommerceModule.addToCart("Phone", 500);
let total = ECommerceModule.calculateTotal();
console.log("Total before discount:", total);
const discountFunc = ECommerceModule.applyDiscount(10);
let discountedTotal = discountFunc(total);
console.log("Total after discount:", discountedTotal);
const couponGen = ECommerceModule.generateCoupon();
console.log("Generated Coupon:", couponGen.next().value);   
ECommerceModule.processPayment(discountedTotal, () => {
    console.log("Order completed. Thank you for shopping!");
});


// Concept Questions://


// 1. Difference between function declaration & expression?//
//ANS: * Function Declaration:
// - Defined with the function keyword at the start
// - Hoisted completely (can be called before declaration)
// * Function Expression:
// - Assigned to a variable
// - Not hoisted (cannot be called before assignment)

// // 2. What is higher order function?//
//ANS: A higher-order function is a function that can take another function as an argument, return a function, or both. 
// It allows for more flexible and reusable code by enabling functions to operate on other functions.

// // 3. Real-time example of generator?
// ANS:Generators are used when values need to be produced one at a time.

// // 4. Why do we use IIFE?
// ANS:IIFE (Immediately Invoked Function Expression) is used to create a new scope and avoid polluting the global namespace.

// // 5. Difference between var, let, const?
// ANS:* var: Function-scoped, can be redeclared and updated, hoisted with undefined
// * let: Block-scoped, cannot be redeclared but can be updated, hoisted but not initialized (TDZ)
// * const: Block-scoped, cannot be redeclared or updated, hoisted but not initialized (TDZ)