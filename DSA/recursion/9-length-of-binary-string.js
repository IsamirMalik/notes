/* Given a positive integer n, count the number of binary strings of length n that do not contain consecutive 1s.

for n = 1 the answer is 2, because the possible binary strings are "0" and "1" .

for n = 2, the answer is 3, because the possible binary strings are "00", "01", "10".

if n = 3, the possible binary strings are "000", "001", "010", "100", "101", "110", "111".

Ans for n = 3 the answer is 5 , because "110" and "111" are not allowed.

if n = 4, the possible binary strings are "0000", "0001", "0010", "0100", "0101", "1000", "1001", "1010".

for n = 4 , the answer is 8 .

for n = 5 , the answer is 13 .

Pattern -> 

for n = 1, the answer is 2.

for n = 2, the answer is 3.

for n = 3, the answer is 5.
for n = 4, the answer is 8.

looks like a Fibonacci sequence , its just it starts with 2 and 3. and slight change in the base case.
 
*/

function countStrings(n) {
  if (n == 1) {
    return 2;
  }else if (n == 2) {
    return 3;
  }
  return countStrings(n - 1) + countStrings(n - 2);
}

console.log(countStrings(1));
console.log(countStrings(2));
console.log(countStrings(3));
console.log(countStrings(4));
console.log(countStrings(5));