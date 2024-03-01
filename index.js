// EXAMPLE 1 - Remove the first Element from an Array in JavaScript

// ✅ Remove the first element from an array WITH mutation
const arr = ['a', 'b', 'c'];

const firstElement = arr.shift();
console.log(firstElement); // 👉️ a

console.log(arr); // 👉️ ['b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove the first element from an Array using `slice()`

// const arr = ['a', 'b', 'c'];

// const withoutFirst = arr.slice(1);
// console.log(withoutFirst); // 👉️ ['b', 'c']

// console.log(arr); // 👉️ ['a', 'b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove the first N elements from an Array using `slice()`

// const arr = ['a', 'b', 'c', 'd'];

// const newArr = arr.slice(2);
// console.log(newArr); // 👉️ ['c', 'd']

// console.log(arr); // 👉️ ['a', 'b', 'c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove the first N elements from an Array using splice()

// const arr = ['a', 'b', 'c', 'd'];

// const removeFirstTwo = arr.splice(0, 2);
// console.log(removeFirstTwo); // 👉️ ['a', 'b']

// console.log(arr); // 👉️ ['c', 'd']
