// A string is given , we need to capitalize the first letter of the string .

let str = 'abdullah';
str = str[0].toUpperCase() + str.slice(1);
console.log(str);


let str1 = 'developer';
str1 = str1.charAt(0).toUpperCase() + str1.substring(1);
console.log(str1);


let str2 = 'Umar';
str2 = `${str2[0].toUpperCase()}${str2.slice(1)}`;
console.log(str2);


