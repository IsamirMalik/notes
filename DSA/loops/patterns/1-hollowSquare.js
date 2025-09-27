// Print hollow quare pattern:

// for num = 5;

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// Observations 
// 1. Number of rows equals to the given integer .
// 2. first row and last row has integer ( given number ) stars .
// 3. Row between first and last row has stars only on the first and last column . 

function hollowSquare(integer) {

    for (let row = 1; row <= integer; row++) {

        let pattern = '';

        for (let col = 1; col <= integer; col++) {

            if (row == 1 || row == integer) {
                pattern += '* ';
            } else if (col == 1 || col == integer) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        console.log(pattern);
    }
}

hollowSquare(5);

