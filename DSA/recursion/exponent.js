/*

Raising m to the power n ;

Raising 2 to the power 5 means -> 2 * 2 * 2 * 2 * 2 ;

power(m,n) = (m*m*m * --- * (n-1)times ) * m
power(m,n) = power(m,n-1) * m ;

if(n>0) => power(m,n-1) * m ;
if(n==0) => 1
*/

function exponent(m,n){
    if(n == 0){
        return 1
    } else {
        return exponent(m,n -1) * m
    }
}

let final = exponent(2,5);
// console.log(final)

// Faster version
function power(m,n){
    if(n == 0){
        return 1 ;
    }
    if(n%2==0) {
        return power(m*m,n/2)
    }else{
        return m * power(m*m,(n-1)/2)
    }
}

let ans = power(2,5);
console.log(ans)