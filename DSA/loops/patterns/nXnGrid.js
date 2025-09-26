/*

Given a number n , we need to print the following pattern . There should not be anyhting after the last star .
( N X N grid )

for 2 - >  * *
           * *

           * * *
for 3 - >  * * *
           * * *
           
           * * * *
for 4 - >  * * * *
           * * * *
           * * * *

and so on ..   

*/

// Observatiions => 
// 1. The number of rows is equal to n .
// 2. The number of stars in each row is equal to n .
// 3. We need to do the same task repeatedly for each row .

let num = 5;

function printPattern(integer) {

    for (let row = 1; row <= integer; row++) {

        let stars = '';

        for (let col = 1; col <= integer; col++) {

            if (col == integer) {
                stars += '*'
            } else {
                stars += '*-'
            }

        }
        console.log(stars)

    }
}


printPattern(6)
printPattern(7)
printPattern(8)
printPattern(9)
// printPattern(num)
