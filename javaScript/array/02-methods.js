let x;

const arr = [23, 44, 56, 77, 89, 98, 67, 55, 33, 21];

// Mutating the array
arr.push(100); // add element at last index
arr.unshift(0); // add element at first index
arr.pop(); // remove last element
arr.shift(); // remove first element
// arr.reverse(); // reverse the array

// Getting value from the array
x = arr.includes(44);
x = arr.indexOf(44); // return the index of the element
x = arr.slice(1, 4); // start index , end index - 1 
// x = arr.splice(1, 4); // start index , end index - 1 ( mutates the array) -> returns the removed elements (start index , number of elements we want to remove)


x = arr.join('-'); // returns a string with the elements of the array separated by the specified separator

console.log(arr);

x = arr.sort(); // sort the array

console.log(x);



