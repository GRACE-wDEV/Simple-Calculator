

// let datenow = new Date();//to show date NOOOWWW
// console.log(datenow);
// console.log(Date.now)//date in meliseconds from Jan 1, 1970

// let birthday = new Date("May 24, 2008");
// console.log(birthday.getDate());// output: 24
// console.log(birthday.getDay())//output: 6, represents saturday

// let dateNow = new Date();
// let dateDiff = dateNow - birthday;
// console.log((dateDiff)/1000/60/60/24/365);

// console.log(dateNow.getTime());

// console.log(dateNow.getFullYear());
// console.log(1+(dateNow.getMonth()));
// console.log(dateNow.getDay()+1);//



let dateNow = new Date();
// console.log(dateNow);
// console.log("#".repeat(60));
// dateNow.setTime(0);
// console.log(dateNow);
// dateNow.setDate(1);// makes it june 1, not june 21!(now)
// console.log(dateNow);
// Set year to 2025 and month to 13 (which is February 2026, since months are 0-based)
dateNow.setFullYear(2025, 13);
console.log(dateNow); // Logs the updated date object
console.log(Date.parse("May 24, 2008"));// gives meli seconds from Jan 1 1970 to May 24, 2008
// console.log(Date.parse("May 24, 2008")/1000/60/60/24/365);// gives years from Jan 1 1970 to May 24, 2008
console.log(new Date(1211576400000)) // converts milliseconds to date, 1211576400000 is the milliseconds for May 24, 2008

console.log(new Date("1982-05-24T06:10:00Z"));// converts string to date, Z means UTC time and T means time starts
console.log(new Date("1982-05-24T06:10:00+02:00"));// converts string to date, +02:00 means 2 hours ahead of UTC time
// function* generateNumbers()
// {
//   yield 1;
//   // alert("Hello"); // This will not work in Node.js, as alert is a browser-specific function
//   yield 2;
//   yield 3;
//   yield 4;
// }
// console.log(generateNumbers());
// let generator = generateNumbers();
// for(let value of generator)
// {
//   console.log(value);// outputs 1, 2, 3, 4
// }

//Generate infinite numbers
function* generateInfiniteNumbers() {
  let num = 0;
  while (true) {
    yield num++;
  }
}// This generator will yield numbers starting from 0 and incrementing by 1 each time
let infiniteGenerator = generateInfiniteNumbers();
for (let i = 0; i < 10; i++) {
  console.log(infiniteGenerator.next().value); // Outputs numbers from 0 to 9
}

// JSON => JavaScript Object Notation
// JSON is a lightweight data interchange format that is easy to read and write for humans and machines.
/*
  JSON Syntax:
  - Data is represented as key-value pairs.
  - Keys are strings enclosed in double quotes.
  - Values can be strings, numbers, objects, arrays, booleans, or null.
  - Objects are enclosed in curly braces {}.
  - Arrays are enclosed in square brackets [].
  - Example:
    {
      "name": "John",
      "age": 30,
      "isStudent": false,
      "courses": ["Math", "Science"],
      "address": {
        "street": "123 Main St",
        "city": "New York"
      }
    }
*/

// API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications. It allows different software systems to communicate with each other, enabling developers to access the functionality of one application from another.
                  
// parse and stringify JSON
let jsonString = '{"name": "John", "age": 30, "isStudent": false}';
let jsonObject = JSON.parse(jsonString); // Converts JSON string to JavaScript object
console.log(jsonObject); // Outputs: { name: 'John', age: 30, isStudent: false }
let newJsonString = JSON.stringify(jsonObject); // Converts JavaScript object to JSON string
console.log(newJsonString); // Outputs: {"name":"John","age":30,"isStudent":false}

// Asynchronous & Synchronous programming
// Synchronous programming executes code sequentially, blocking the execution of subsequent code until the current operation completes.
// Asynchronous programming allows code to run in the background, enabling other code to execute while waiting for a response or operation to complete.

// Example of synchronous code
console.log(1);
console.log(2);
alert("This is synchronous code");
console.log(3);
// Example of asynchronous code using setTimeout
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000); // This will execute after 1 second
console.log(3);

