// A number is given , we need to find out whether it is even or not.

let num = 101;

function isEven(num){
    return !(num & 1)
}

function isOdd(num){
    return (num & 1)
}

let final = isEven(num);
console.log(final);