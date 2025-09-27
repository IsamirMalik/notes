// An object is given , which has some numeric value , we need to add all the numeric values .

let obj = {
    first: 9,
    second: 20,
    third: 30,
    fourth: 40,
    name: 'Abdullah',
    fifth: 50
}

function forInLoop(object) {

    let sum = 0;

    for (let key in object) {

        let value = object[key];
        let type = typeof value;
        if (type == 'number') {
            sum += value;
        }
    }
    console.log(sum)
}

forInLoop(obj)