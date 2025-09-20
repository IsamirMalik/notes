// From an argument string, find and print all unique letters (skip repeats) using a loop.

let str = 'abcabcabcdefdefDefghgighighiJkljklmnOmnopqrpqrstustuvwxvwxyzyz';

function forLoop(string){
    string = string.toLowerCase()

    let  unique = {};

    for(let char of string){
        
        unique[char] = ( unique[char] || 0 ) + 1;
    }

    let arr = []

    for(let key in unique){
        arr.push(key)
    }
    console.log(arr.join(" "))
}

forLoop(str)