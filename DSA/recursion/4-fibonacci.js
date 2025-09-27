// Any fibonacci number is the sum of the two preceding ones.

// like 0 1 1 2 3 5 8 13 21 34 

// Base case for fibonacci function
// if n is 0 or 1, return n ;

// Assumption : We have already calculated fibonacci(n-1) and fibonacci(n-2) (  Lets assume that the function works correctly for f(n-1) and f(n-2) means f(n-1) gives the (n-1)th fibonacci number and f(n-2) gives the (n-2)th fibonacci number  ) )

// Selfwork => Adding the two preceding fibonacci numbers to get the nth fibonacci number

function fibonacci(n){
    if(n == 0 || n == 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

// Test the function
console.log(fibonacci(7)); 


// Dry run

// fibonacci(5) = 13
// fibonacci(4) + fibonacci(3) = 5 + 8 = 13
// fibonacci(3) + fibonacci(2) + fibonacci(1) = 3 + 2 + 1 = 6
// fibonacci(2) + fibonacci(1) + fibonacci(0) = 2 + 1 + 0 = 3
// fibonacci(1) + fibonacci(0) + 0 = 1 + 0 = 1

