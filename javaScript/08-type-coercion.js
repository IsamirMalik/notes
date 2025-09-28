// Type Coercion

let  x;

x = 10 + '10'; // 1010
console.log(x , typeof x); // string

x = 10 - '10'; // 0
console.log(x , typeof x); // number

x = 10 * '10'; // 100
console.log(x , typeof x); // number

x = 10 / '10'; // 1
console.log(x , typeof x); // number

x = 10 + true; // 11
console.log(x , typeof x); // number

x = 10 + false; // 10
console.log(x , typeof x); // number

x = 10 + undefined;
console.log(x , typeof x); // number