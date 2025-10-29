// An array is given , we need to find the product of all elements except the current element .

function productExceptSelf(nums) {
    let n = nums.length;
    let output = new Array(n).fill(1);

    let left = 1, right = 1;

    for (let index = 0; index < n; index++) {
        output[index] *= left;
        left *= nums[index]
    }

    for (let index = n - 1; index >= 0; index--) {
        output[index] *= right;
        right *= nums[index]
    }

    return output
}

let array = [1, 2, 3, 4, 5];
let final = productExceptSelf(array);
console.log(final)