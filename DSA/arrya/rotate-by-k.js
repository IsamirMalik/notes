// An array is given , we need to rotate the array by k elements .

function rotate(array,k){

    let n = array.length;
    k = k % n;

    // reverse the first n-k elements
    reverse(array,0,n-1-k);

    // reverse the last k elements
    reverse(array,n-k,n-1);

    // reverse the whole array
    reverse(array,0,n-1);

    // this reverse the array in place
};

function reverse(array,start,end){

    while(start < end){
        [array[start],array[end]] = [array[end],array[start]];
        start++;
        end--;
    }
};

let array = [1,2,3,4,5,6];
rotate(array,2);
console.log(array);