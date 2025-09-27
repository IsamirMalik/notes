// Check whether the given array is sorted or not ?

let arr = [ 10, 11, 12, 45];

function isSorted(arr,index = 0) {

    if (index == arr.length - 1) return true;

    if (arr[index] > arr[index + 1]) {
        return false
    }

    return isSorted(arr,index + 1);
}

let final = isSorted(arr);
console.log(final)