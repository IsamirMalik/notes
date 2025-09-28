// String

let x;

const name = 'Abdullah' ;
const age = 20 ;

// Concatenation
x = 'Hello , my name is '  + name + ' ' + 'and I am ' + age + ' ' + 'years old';
console.log(x);

// Template Literals
x = `Hello , my name is ${name} and I am ${age} years old`;
console.log(x);


// String Properties and Methods

const s = new String('Abdullah');
console.log(s , typeof s); // Object
console.log(name ,typeof name) // string

// Access value by key
x = name[0];
console.log(x); // A

x = s[0];
console.log(x); // A

x = s.__proto__;
console.log(x); // Object (shows all the methods and properties)

// Uppercase    
x = name.toUpperCase();
console.log(x);

// Lowercase 
x = name.toLowerCase();
console.log(x);


x = s.charAt(0);
console.log(x); // A

x = s.indexOf('b');
console.log(x); // 1

// Substring
x = name.substring(0, 3);
console.log(x); // Abd
x = name.substring(6);
console.log(x); // ah

// Slice -> same as substring , But we can use negative index
x = name.slice(-8);
console.log(x); // Abdullah
x = name.slice(-8,-5);
console.log(x); // Abd

// trim -> removes the white spaces
x = '    Abdullah    ';
x = x.trim();
console.log(x); // Abdullah

// Replace -> does not mutate the original string , returns a new string
p = name.replace('Abdullah' , 'Umar');
console.log(p); // Umar

// Includes
x = name.includes('Abdullah');
console.log(x); // true

// valueOf
x = name.valueOf();
console.log(x);

// split - > converts a string into an array , takes a separator
x = name.split('');
console.log(x);

// Length 
x = name.length ;
console.log(x); // 8