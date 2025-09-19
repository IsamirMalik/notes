/*

Consider a money system consisting of n coins . Each coin has a positive integer value . Given an integer target , find the minimum number of coins needed to make change for target .

*/


let coins = [1, 5, 7];
let target = 16;

function minCoins(coins, target) {

    let result = Infinity;

    if (target == 0) {
        return 0;
    }

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] <= target) {
            result = Math.min(result, minCoins(coins, target - coins[i]));
        }
    }

    return result + 1;


}

console.log(minCoins(coins, target));