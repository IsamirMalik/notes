// Print "Checkpoint" for every 10th loop iteration, "Halfway there" at 50, and "You made it!" at 100, when looping 1 to 100.


function forLoop() {

    for (let index = 1; index <= 100; index++) {
        if (index == 100) {
            console.log('You Made it!')
        } else if (index == 50) {
            console.log('Halfway there!')
        } else if (index % 10 == 0) {
            console.log('Checkpoint')
        }
    }
}

function whileLoop() {

    let index = 1;

    while (index <= 100) {

        if (index == 100) {
            console.log('You Made it!')
        } else if (index == 50) {
            console.log('Halfway there!')
        } else if (index % 10 == 0) {
            console.log('Checkpoint')
        }
        index++;
    }
}

forLoop()

console.log("~~~")

whileLoop()