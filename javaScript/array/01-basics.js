let x;

// Array Literal
const numbers = [12,34,56,77,39];

// Array constructor
const fruits = new Array('apple','banana','mango');

x = numbers[0];

x = numbers[0] + numbers[2];

x = `The first fruit is ${fruits[0]}`;

// x = numbers.length;

numbers.length = 2;

fruits[2] = 'grapes';

fruits[fruits.length] = 'watermelon';
// console.log(fruits);


console.log(x);


