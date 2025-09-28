// Number

const num = 5;
const num2 = new Number(5.63287);
console.log(num, typeof num, num2, typeof num2);

let x;

x = num.toString();
console.log(x, typeof x); // 5 , string

x = num.toString().length;
console.log(x, typeof x); // 1 , number

x = num.toFixed(2);
console.log(x, typeof x); // 5.00 , string

x = num2.toPrecision(4);
console.log(x, typeof x); // 5.633, string

x = num.toLocaleString('ar-EG');
console.log(x, typeof x); // ٥ , string

x = num.valueOf();
console.log(x, typeof x); // 5 , number

// largest 

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

