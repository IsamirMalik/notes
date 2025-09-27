/*

Print the following pattern:

for num = 5
*
* *
* * *
* * * *
* * * * *

*/

// Observations => 
// 1. The number of rows is equal to n .
// 2. The number of stars in each row is equal to i .

let num = 5;

function printPattern(integer) {
    for(let row = 1 ; row <= num ; row++){
    
        let stars = '';
    
        for(let col = 1 ; col <= row ; col++){
            stars += '* ';
        }
        console.log(stars);
    }
}

printPattern(num);

