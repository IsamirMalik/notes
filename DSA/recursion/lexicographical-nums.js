
/*

Given an integer n , return all numbers in the range [1,n] sorted in lexicographical order ( generalistion of alphabetical order of the dictionaries) .

*/

let arr;

function lexicographicalOrder(i, n) {
    if (i > n) return;
    if (i != 0) {
        arr.push(i)
    }

    for (let j = ((i == 0) ? 1 : 0); j <= 9; j++) {
        lexicographicalOrder(i * 10 + j, n);
    }
}

function callingFunction(n) {
    arr = [];
    lexicographicalOrder(0, n);
    return arr;
}

let functionCall = callingFunction(30);
console.log(functionCall)

