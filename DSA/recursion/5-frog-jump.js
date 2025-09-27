/* 

there are N stones arranged in a row, numbered from 1 to N. for each stone i, the height of the stone is given by H[i].

a frog is initially on the first stone . he will repeat the following steps until he reaches the last stone:

1. jump to the next stone (i + 1) or stone i + 2 , here a cost of | h[i] - h[j] | where j is the stone to land on . 

find the minimum cost to reach the last stone.

Assumption : assume that the funciton works correctly for i+1 and i+2. which means fucntion correctly gives us the minimum cost to reach last stone form i+1 and from i+2.

self work : Form ith stone , consider all possibilities and find the minimum of all possibilities.Means , from ith stone frog only can jump to i+1 or i+2 , we need to find the minimum of it .

if we somehow get the minimum cost to reach the last stone from i+1 ( let x) and i+2 ( let y ) then the minimum cost to reach the last stone from ith stone will be min(x + | H[i] - H[i+1] | , y + | H[i] - H[i+2] | ) . 

*/

function minJumps(i, n, H) {

    if (i == n) return 0;
    if(i == n-1){
        // when frog is at the second last stone, it can only jump to the last stone.
        return Math.abs(H[i] - H[i+1]) + minJumps(i + 1, n, H);
    }
    if (i > n) return Infinity;

    let iPlusOne = Math.abs(H[i] - H[i + 1]) + minJumps(i + 1, n, H);
    let iPlusTwo = Math.abs(H[i] - H[i + 2]) + minJumps(i + 2, n, H);

    return Math.min(iPlusOne, iPlusTwo);
}

let H = [10, 30, 20 , 55];
let n = H.length-1;
console.log(minJumps(0, n , H));

