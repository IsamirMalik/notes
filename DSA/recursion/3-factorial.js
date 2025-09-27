/*

Find the factorial of a number using Recursion .

factorial(n) = 1*2*3* ---- * (n-1) * n ;
factorial(n) = factorial(n-1) * n ;

if (n > 0) => factorial(n-1) * n ;
if ( n == 0 ) => 1

TC & SC => O(n)

*/

function factorial(n){
    if(n == 0){
        return 1
    }else {
        return factorial(n-1) * n;
    }
}

let final = factorial(5);
console.log(final) // 120

// Iterative method 

function factorial1(n){
    let product = 1 ;

    while( n > 0){
        product *= n ;
        n--
    }

    console.log(product)
}

factorial1(5)