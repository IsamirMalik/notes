/*
You are given an array `nums` consisting of integers where half of the numbers are even, and the other half are odd. Your objective is to rearrange the array such that each even number appears at an even index, and each odd number appears at an odd index.

Return any array that meets these sorting requirements.
*/

function sortArrayByParity(nums) {
    // nums: integer array where half are even and half are odd.
    // Return a rearranged array with evens at even indices and odds at odd indices.
    // It is not necessary that array should be sorted.

      let arr = new Array(nums.length).fill(0);
        let evenIndex = 0;
        let oddIndex = 1;
      for(let index = 0 ; index < nums.length ; index++){
          if(nums[index] % 2 == 0){
                  arr[evenIndex] = nums[index];
                  evenIndex += 2
          }else {
              arr[oddIndex] = nums[index];
              oddIndex += 2
          }
      }
      return arr
  }

  let nums = [4,2,5,7];
  console.log(sortArrayByParity(nums));