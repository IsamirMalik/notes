/*
Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to* `target`.

You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

*/

function twoSum(nums, target) {
    
      let result = []
      for(let index = 0 ; index < nums.length ; index++){
      
          for (let j = index+1; j < nums.length; j++) {
              let sum = nums[index];
              sum += nums[j];

              if(sum == target){
                  result.push(index);
                  result.push(j);
                  break;
              }
          }
      }
      return result;
  }

  let nums = [2,7,11,15];
  let target = 9;
  let final = twoSum(nums, target);
  console.log(final);