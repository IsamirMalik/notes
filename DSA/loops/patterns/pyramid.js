/*

Print the Pyramid pattern :

for num = 5 ;

        *                first row -> 8 spaces and 1 star  = 9 characters
      * * *              second row -> 6 spaces + 3 stars = 9 characters
    * * * * *            third row -> 4 spaces + 5 stars = 9 characters
  * * * * * * *          fourth row -> 2 spaces + 7 stars = 9 characters
* * * * * * * * *        fifth row -> 0 spaces + 9 stars = 9 characters
   

*/

// Observations :-
// 1. In each row ( x ), the number of stars is equal to  2x-1.
// 2. In each row ( x ), the number of spaces is equal to n - x.


function printPyramid(integer){

    for(let row = 1 ; row <= integer ; row++){

        let pattern = '';

        for(let index = 1 ; index <= integer-row ; index++){
            pattern += '  ';
        }

        for(let index = 1 ; index <= 2*row-1 ; index++){
            pattern += '* ';
        }

        console.log(pattern);
    }
}

printPyramid(5);