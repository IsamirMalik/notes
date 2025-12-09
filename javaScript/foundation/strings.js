
// Creation 
let str1 = "Hello"; // Double quotes -> type string
let str2 = 'Hello'; // Single quotes -> type string 
let str3 = `Hello`; // Template literals , backticks -> type string
let str4 = new String('Hello'); // Constructor -> type object

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(typeof str4);

let string = 'When you complain , you make yourself into a victim , When you speak out you are in your Power  '

// Methods 
 // at()
 let x = string.at(5);

 // charAt()
 x = string.charAt(5);

 // concat()
 x = string.concat('Quote');

 // indexOf()
 x = string.indexOf('When'); // 2

 // lastIndexOf()
 x = string.lastIndexOf('When'); // 56

 // localeCompare()

 // match()
//  x = string.match('When'); // [ 'When' , 'When' ]

 // replace()
 x = string.replace('When','when');

 // search()
 x = string.search('When'); // 2

 // trim()
 x = string.trim();

 // slice()
 x = string.slice(0,10); // When you c

 // split()
 x = string.split(' '); 
 // ['When' , 'you' , 'complain' , 'you' , 'make' , 'yourself' , 'into' , 'a' , 'victim' , 'When' , 'you' , 'speak' , 'out' , 'you' , 'are' , 'in' , 'your' , 'Power' , '']

 // substr()
 x = string.substr(0,10); // When you c

 // substring()
 x = string.substring(0,10); // When you c

 // toLowerCase()
 x = string.toLowerCase(); //

 // toLocaleLowerCase()
 // toUpperCase()
 x = string.toUpperCase(); //

 // toLocaleUpperCase()
 // trimStart()
 x = string.trimStart(); 

 // trimEnd()
 x = string.trimEnd();
 
 
 
 console.log(x);
 
