# Recursion

**A function calling itself with an exit base case known as recursive function .**

**Loop has only ascending phase on the other hand recursion has ascending and descending two phases .**

**Recursive functions are memory consuming .**

- **Two Phases**
  1. Calling phase .
  2. Returning phase .

- Example :-
    - Two steps 
      1. Switch on the Bulb .
      2. Go to next Room
        - O/P -> first bulb will be switched on first
   - Reverse the steps
      1. Go to next Room .
      2. Switch on the Bulb
        - O/P -> Last bulb will be switched on first 


```
function name(){
    if(terminating condition){
        this line will be executed while calling ( ascending )
        name() -> Recursive call .
        this line will be executed while returning ( descending )
    }
} 
```

## Recursion & stack

- for n , there will be n + 1 calls ( Execution context / activation record )
- Memory / space -> O(n+1) => O(n)

## Time Complexity 
 **We assume that every statement in program takes one unit of time for execution .** relate it to the currency of different countries -> one unit of currency ( )

 - Assume in printing it takes one unit of time . ( visual example ) - for n , O(n) complexity .
  
``` 
function name(n){ - > assume it has T(n) complexity

    if(condition){ -> it takes one unit of time 
        print -> it takes one unit of time
        name(n-1) - > it takes T(n-1)
    }
}

time complexity in recurrence relation
total => T(n) = T(n-1) + 2 ( When n > 0 ) 
if n == 0 it takes one unit of time
if we have any constant value , we can replace it with one

Induction / successive substitution method
now take the upper equation and solve it 

T(n) = T(n-1) + 1;  first equation

( substitute the T(n-1) with lesser value , like T(n-2) )

equation becomes 
T(n) = T(n-2) + 1 + 1 ; 
.
T(n) = T(n-3) + 3
.

.
repeat it until T(n-k) ( k == n )

T(n) = T(n-n) + n ;
T(n) = T(0) + n;
T(n) = 1 + n - > O(n)


```
## Types of Recursion

1. **Tail**
   - When recursive call is the last statement in the function .
   - Everything is performed at calling time .
   - Nothing will be performed at returning time .
   - Instead of tail recursion , use loop , they are more efficient in terms of space .
2. **Head**
   - When recursive call is the first statement in the function .
   - Everything will be done at returning time .
   - Nothing is performed at calling time .
3. **Tree**
   - if Function call itself only onetime ,it is linear recursion .
   - if function is calling itself more than one time , it is tree recursion .
4. **Indirect**
   - Function calls one another in a fashion that it forms a cycle . A -> B -> C -> A . 
5. **Nested**
   - Recursion inside recursion .
    ```
    function name(n){
      if(condition){
        name(name(n-1))
      }
    }
    ```
   - 
