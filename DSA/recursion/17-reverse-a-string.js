// Write a program to reverse a string .

function reverseString(string,lastIndex){ // takes the last index and keep decreasing by one index until it reaches 0

    // if(index == string.length){
    //     console.log(reversed);
    // }else{
    //     reversed += string[string.length - index - 1];
    //     reverseString(index + 1,string);
    // }

    if(lastIndex < 0 ){;
        return "";
    }
    
    return string[lastIndex] + reverseString(string,lastIndex - 1);
    
}


console.log(reverseString('abc',2));