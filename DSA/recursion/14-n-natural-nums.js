// We are given a number n and we need to print the first n natural numbers.

// assume that we already have a function which prints the first (n-1) natural numbers in increasing order , we just need to add a print statement to print the nth number.

// Printing n natural numbers in increasing order
function printIncreasingNumbers(n) {
    if (n == 0) {
        return;
    }
    printIncreasingNumbers(n - 1);
    console.log(n);
}

printIncreasingNumbers(5);

// Printing n natural numbers in decreasing order

function printDecreasingNumbers(n) {
    if (n == 0) {
        return;
    }
    console.log(n);
    printDecreasingNumbers(n - 1);
}

printDecreasingNumbers(5);