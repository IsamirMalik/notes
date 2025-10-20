// A number is given to us , we need to find all the prime numbers upto that number.

let num = 100;

function allPrimesUptoN(num) {

    let primes = new Array(num + 1).fill(true);
    primes[0] = false;
    primes[1] = false;

    for (let index = 2; index <= Math.sqrt(num); index++) {
        if (primes[index]) {
            for (let j = index * index; j <= num; j += index) {
                primes[j] = false;
            }
        }
    };

    let arrayOfPrimes = [];
    for (let index = 2; index <= num; index++) {
        if (primes[index]) arrayOfPrimes.push(index);
    }
    console.log(arrayOfPrimes);

}

allPrimesUptoN(num);