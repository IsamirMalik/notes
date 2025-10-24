/*
Given an array of integers `nums`, your task is to find the largest perimeter of a triangle that can be formed from any three lengths of the array, such that the triangle has a non-zero area. If forming such a triangle is impossible, return 0.

The perimeter of a triangle is simply the sum of its three sides. For a valid triangle with a non-zero area, the sum of the lengths of any two sides must be greater than the length of the third side according to the triangle inequality theorem.

*/

function largestPerimeter(nums) {
    // nums: array of integers representing lengths
    // Return the largest perimeter of a valid triangle, or 0 if no valid triangle can be formed
    nums = nums.sort((a,b) => b - a);
    for(let index = 0 ; index < nums.length ; index++){
        let first = nums[index];
        let second = nums[index + 1]
        let third = nums[index + 2];

        if( second  + third > first){
            let peri = first + second + third
            return peri;
        }
    }

      return 0;
      
  }

  let nums = [2,1,2];
  let final = largestPerimeter(nums);
  console.log(final);