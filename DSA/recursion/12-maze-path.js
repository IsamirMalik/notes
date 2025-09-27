/*

let's say you are standing on the top left corner of a nxm grid. You want to reach the bottom right corner. You can only move one step right or down. Write a function to calculate the number of ways you can reach the bottom right corner.
*/


function mazePath(i,j,n, m) {
    if (i >= n || j >= m) return 0;
    if (i == n - 1 && j == m - 1) return 1;
    return mazePath(i,j+1,n, m) + mazePath(i+1,j,n,m);
}

let final = mazePath(0, 0, 3, 3); // ans => 6 ways
// let final = mazePath(0, 0, 2, 2); // ans => 2 ways
console.log(final)