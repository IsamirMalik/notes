let x;

const fruits = ['apple','banana','mango','cherry','grapes','watermelon'];

const berries = ['strawberry','blueberry','raspberry'];

// fruits.push(berries);

// x = fruits[6][0];

const allFruits = [fruits,berries];

x = allFruits ;

x = fruits.concat(berries); 

x = [...fruits,...berries]; // spread operator 

// Flatten array
const arr = [1,2,3,[4,5,6],[7,8,9]];

x = arr.flat();

// Static Methods on Array Object

x = Array.isArray(fruits);
x = Array.isArray('hello');

x = Array.from('hello');

const a = 1 ;
const b = 2 ;
const c = 3 ;

x = Array.of(a,b,c);

console.log(x);