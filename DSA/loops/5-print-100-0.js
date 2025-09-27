// We need to print 100 to 0  in steps of 10 . ( 100 ,90 , 80 , 70 , 60 , 50 , 40 , 30 , 20 , 10 )


function forLoop() {

    for (let i = 100; i > 0; i -= 10) {
        console.log(i)
    }
}

function whileLoop() {
    let i = 100;
    while (i > 0) {
        console.log(i);
        i -= 10;
    }
}

function whileWithProduct() {
    let i = 1;

    while (i <= 10) {
        let num = i * 10;
        console.log(num);
        i++;
    }
}

forLoop()
whileLoop();
console.log('~~~~~~~~')
whileWithProduct()