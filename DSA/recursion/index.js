// Tail Recursion
function recursion(x) {
  if (x > 0) {
    console.log(x);
    recursion(x - 1);
  }
}

// both will take same time but recursion takes space of O(n) and 

// Tail recursion using loop
// let num = 3;
// while(num > 0){
//     console.log(num);
//     num--
// } // o/p -> 3 2 1 


// Head Recursion
function recursion2(x) {
  if (x > 0) {
    recursion2(x - 1);
    console.log(x);
  }
  return 0;
}

function head(x){
    let i = 1
    while(i <= x){
        console.log(i);
        i++;
    }
}

// head(5)

// recursion(3);
// recursion2(3);
// main()

// Recursion and static variable 
let n = 0
function fun(x){
    if(x > 0){
        n++;
        return fun(x-1) + n;
    }
    return 0 ;
}

function main() {
  const x = 5;
  console.log(fun(x));
  return 0;
}

// main() // 25


// Tree Recursion

function tree(x){
    if(x>0){
        console.log(x);
        tree(x-1)
        tree(x-1)
    }
    return 0
}

/*

for n = 3 , there will be 4 levels
calls on each level
first - > 1
second -> 2
third -> 4
fourth -> 8
 total => 2 power (3+1) - 1 = O(2 power 3);
 for this function 
 time = > O(2 power n)
 space => O(n)
*/


// tree(3)

// Indirect Recursion
function indirect(n){
    if(n>0){
        console.log(n);
        B(n-1)
    }
}
function B(){
    if(n>1){
        console.log(n);
        indirect(n/2)
    }
}