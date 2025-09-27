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
// 2. The number of stars in each row is equal to  i  ( number of the row) .
// 3. The numnber of spaces in each row is equal to n - i .

let num = 5;

function printPattern(integer) {

    for (let row = 1; row <= integer; row++) {

        let pattern = '';
        let spaces = integer - row;

        for (let index = 1; index <= spaces; index++) {
            pattern += '  '
        }

        for (let index = 1; index <= row; index++) {
            pattern += "* "
        }

        console.log(pattern)
    }
}

printPattern(num)