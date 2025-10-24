// An integers can be represented in binary form as a sequence of 0s and 1s. In this representation, the most significant bit is at the left, and the least significant bit is at the right. The binary representation of 0 is 0, the binary representation of 1 is 1, and the binary representation of 2 is 10. 

function binaryRep(number){
    
    // let binary = "";
    // while(number > 0){
    //     binary = (number % 2) + binary;
    //     number = Math.floor(number / 2);
    // }

    let binary1 = number.toString(2);

    return  binary1
};

let final = binaryRep(12);
console.log(final);