// Given an array of strings , we need to connect them manually . join() method is not allowed .

const connectStrs = (strings) => {
    let finalStr = '';

    // for(let str of strings){
    //     finalStr += str
    // }

    // using reduce method 
    finalStr = strings.reduce((acc , val) => acc + val, '');

    return finalStr
};

function connectingStrings(strings,index = 0 , finalStr = '') {
    if(index == strings.length) return finalStr;

    return connectingStrings(strings,index + 1 , finalStr + strings[index]);
}

let arr = ['I' , 'am' , 'a' , 'Developer'];

// let final = connectStrs(arr);

let final1 = connectingStrings(arr);

console.log(final1)