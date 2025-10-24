// Given an array of integers , we need to find the unique elements in the array , every other element is repeated .

const findUnique = (array) => {
    let unique;

    // array = array.sort((a,b) => a - b);
    // console.log(array)
    // for(let index = 0 ; index < array.length ; index += 2){
    //     if(array[index] !== array[index + 1]){
    //         unique = array[index];
    //         break;
    //     }
    // }

    // using XOR 

    for(let int of array){
        unique ^= int
    }

    return unique;
}

let array = [1,2,3,5,4,5,3,2,1];
let arr2 = [0];
let arr3 = [5,1,5,5,5,5,5]
let final = findUnique(arr3);
console.log(final)