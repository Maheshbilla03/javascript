// 1. welome progam //

let userName = prompt("Enter your name:");
let welcomeMessage = "Hi " + userName + ", Welcome to JavaScript Training.";

//alert(welcomeMessage);
console.log(welcomeMessage);

//2.console mothesds //
console.log("500");
console.warn("500");
console. error("500");
console. clear();


//data types identification //
  
      // 3. Data Types
    let str = "Mahesh";
    let num = 22;
    let bool = true;
    let a;
    let b = null;

    console.log(str, typeof str);
    console.log(num, typeof num);
    console.log(bool, typeof bool);
    console.log(a, typeof a);
    console.log(b, typeof b);

    // 4. Arithmetic Operators//
    
    let x = 20;
    let y = 5;

    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);

    // 5. Increment & Decrement//

    let n = 10;
    console.log(++n);
    console.log(n++);
    console.log(--n);
    console.log(n--);

    // 6. Assignment Operators// 

    let z = 10;
    z += 5;
    console.log(z);

    // 7. Array Access //
    let skills = ["HTML", "CSS", "JavaScript", "React"];
    console.log(skills[0]);
    console.log(skills[1]);
    console.log(skills[skills.length - 1]);
    console.log(skills.length);

    // 8. Modify Array //

    skills.push("NodeJS");
    console.log(skills);
    skills.pop();
    console.log(skills);

    // 9. StudentObject //
    let student = {
        name: "Mahesh",
        age: 28,
        course: "Front End",
        city: "Hyderabad"
    };
    console.log(student.name);
    console.log(student.age);

    // 10. Nested Object //
    let company = {
        name: "stackly",
        trainer: {
            name: "Mahesh",
            subject: "JavaScript"
        }
    };
    console.log(company.name);
    console.log(company.trainer.name);
    console.log(company.trainer.subject)