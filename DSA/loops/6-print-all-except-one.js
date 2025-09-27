// Given an array of Names , we need to print all names except one .

let arr = ['Abdullah' , 'Umar' , 'Amir' , 'Sajid' , 'Shakir' , 'Abid'];
// Do not print Amir

function forLoop(array){

    let n = array.length;
    for( let i = 0 ; i < n ; i++){
        if(array[i] == 'Amir'){
            continue;
        }else {
            console.log(array[i])
        }
    }
}

function whileLoop(array){

    let n = array.length ;
    let i = 0 ;

    while( i < n){
        if(array[i] == 'Amir'){
            i++;
            continue;
        }else{
            console.log(array[i])
        }
        i++;
    }
}

forLoop(arr);
whileLoop(arr);