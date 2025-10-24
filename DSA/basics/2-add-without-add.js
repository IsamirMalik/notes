// Two numbers are given we need to add those without using + operator .

let num1 = 10;
let num2 = 110;

function add(a,b){
    while(b != 0){
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;        
    }
    return a;
}

let final = add(num1, num2);
console.log(final);