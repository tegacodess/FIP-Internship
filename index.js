// The ES6 brought about the use of let and const. Let and const are ways of declaring variables and they have different uses.
        
// In terms of scope, let is block scoped and is used to decare a varaible that can be updated not re-declared. Run the following code in the console to explain scope.

// function number() {
//   let x = 9; 
//   console.log (x); 
//  }

// console.log (x); 
/* This will throw in an error message 
that x isn’t defined. */

//To explain updating and re-declaring variables use
//Re-declaring variables declared with let statements.
// let names = 'John';
// let names = 'Mary'; //You'll uncomment this to explain tho
// console.log (names); //This will throw in an error that name has already been declared

// //Updating variables declared with let statements.
// let number = 4;
// number = 9;
// console.log (number); // This will log 9 in the console

// //Const
// // Const is also used to declare a variable that cant be re-declared nor updated. the only time that variables declared with const can change is in the case of objects and arrays   

// //example on objects that is changed
// // Declare a const object
// const myObject = { key: 'String' };

// //Changing the content of the object
// myObject.key = 'new string';
// console.log(myObject); // Output: { key: 'new string' }

// //example of arrays that are changed
// //using the array.push method, we can chage the content of an array that was declared using the const vaariable declaration name
// //Declare a const array
// const array = [2, 4, 6];
// //Updating/modifying the value of the array
// array.push(8);
// console.log (array); //Output will be [2, 4, 6, 8]
// //These are array iteration methods
// //find and learn array methods foreach, map, filter, reduce with examples.

// // // //map
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); // [2, 4, 6, 8]

// //filter
// const books = [
//   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//   { title: '1984', author: 'George Orwell', year: 1949 },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
// ];

// // Using filter to find books published after 1950
// const recentBooks = books.filter(book => book.year > 1950);

// console.log(recentBooks);


// //reduce
const numbersthree = [1, 2, 3, 4];
const sum = numbersthree.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10

