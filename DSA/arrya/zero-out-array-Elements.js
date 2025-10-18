/*
You are given a non-negative integer array `nums`. Your task is to determine how many operations are needed to make all elements in the array equal to zero.

In one operation, you must:

- Choose a positive integer `x` such that `x` is less than or equal to the smallest non-zero element in `nums`.
- Subtract `x` from every positive element in `nums`.

Return the minimum number of operations required to make every element in `nums` equal to zero.

*/

function zeroOutArrayElements(nums) {
    // nums: array of non-negative integers
    // return the minimum number of operations to make all elements zero
    let ops = 0;
    nums = nums.sort((a,b) => a - b);
    let min = 0;
    for(let num of nums){
        if(num > min){
            ops++;
            min = num
        }
    }
      return ops
    
  }

let nums = [1,5,0,3,5];
let final = zeroOutArrayElements(nums);
console.log(final)
