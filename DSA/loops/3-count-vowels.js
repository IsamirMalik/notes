// A string is given , we need to find how many vowels are there in the string .

let str = 'AEIOU';

function forLoop(string) {

    let n = string.length, count = 0;

    for (let index = 0; index < n; index++) {

        let char = string[index].toLowerCase();

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++
        }

    }
    console.log(count)
}

function whileLoop(string){

    let n = string.length ;
    let count = 0 , index = 0 ;

    while(index < n){

        let char = string[index].toLowerCase()

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        }

        index++;

    }

    console.log(count)
}

forLoop(str)
whileLoop(str)