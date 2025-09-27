/*
Find the sum of first Natural numbers using Recursion .

TC - > O(n)
SC - > O(n)

sum(n) = 1+2+3+4 + ------ + (n-1) + n;
sum(n) = sum(n-1) + n ;

Just for understanding -> Otherwise use the formula n * (n+1) / 2

*/



function sum(n){
    if(n==0){
        return 0
    }else {
        return sum(n-1) + n ;
    }
}

let final = sum(5) ;
console.log(final) 