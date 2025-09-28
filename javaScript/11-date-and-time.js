let d;

// Better to see all of this in Browser

d = new Date();
console.log(d , typeof d); // object
d.toString();
console.log(d);

d = new Date(2025,4,10);
console.log(d);

d = new Date('2025-04-10');
d = new Date('07/10/2025 12:30:00');
console.log(d);

d = Date.now();
console.log(d); // current time in milliseconds from 1 jan 1970

d = new Date();
console.log(d); 
d = d.getTime();
console.log(d); // current time in milliseconds from 1 jan 1970

d = new Date(1759049742909); // taking miliseconds
console.log(d); // date and time 




