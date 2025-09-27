/*

Given a number n, find the minimum number of operations required to reduce it to 1. For this u can use the following operations:
1. if n is divisible by 3 , divide by 3 .
2. if n is divisible by 2 , divide by 2 .
3. else subtract 1 from n .

*/

function reduceToOne(n) {

    if (n === 1) {
        return 0;
    }
    let possibilities = [];
    if (n % 3 === 0) {
        possibilities.push(reduceToOne(n / 3));
    }
    if (n % 2 === 0) {
        possibilities.push(reduceToOne(n / 2));
    }

    possibilities.push(reduceToOne(n - 1));
    
    return 1 + Math.min(...possibilities);
}

console.log(reduceToOne(11));

