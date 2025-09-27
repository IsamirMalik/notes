// Print all the even numbers between 1 to 50 .

function forLoop() {

    for (let i = 1; i < 50; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }

}

function whileLoop() {

    let i = 1;
    while(i < 50) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++;
    }

}

forLoop();
whileLoop();