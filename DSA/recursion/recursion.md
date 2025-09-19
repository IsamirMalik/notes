# Recursion

**It is a technique using which we solve bigger probs by calculating ans of smaller sub-probs . we generally denote the bigger prob as a function and some arguments and then call the same function with different arguments denoting smaller sub-problems . So we get the ans of smaller sub-problems and build the ans for bigger problems .**

**A programming technique where a function call itself in order to solve a problem . It breaks a complex problem into smaller subProblems of same type until a base condition is met , preventing infinit calls .**

 - Stacks :-  Linear data structure ( mental model to store data in different fashion . ) in which we can add / remove / get data from the top only .
 - Call Stack :- whenever we call a func anywhere in the code , it adds a new entry in the call stack called as stack frame . In stack frame we have context about func ( location which line is currntly executing , what variable it has ..)
 - Activation record  ( Stack frame ) : is a data structure that stores info about a function call during execution . It is pushed onto the call stack when a function is invoked and popped when the function completes .
- Stack frame / Activation record contains : -
    - Return address : The memory location where the program should return after the execution is complete .
    - Parameters ( Arguments ) : The value passed to the function .
    - Local Variable : Variables declared inside the function .
    - Saved registers : CPU  registers that need to be restored after execution .
    - Control link : A reference to the activation record of calling function ( useful for nested calls )
    - Temporary storage : Intermediate values or expressions used during execution .

**A function calling itself with an exit base case known as recursive function .**

**Loop has only ascending phase on the other hand recursion has ascending and descending two phases .**

**Recursive functions are memory consuming .**

- Story 
  A child couldn't sleep , so her mother told a story about a little frog , who couldn't sleep , so the frog's mother told a story about a little bear , who couldn't sleep , so the bear's mother told a story about a little weasel who fall asleep .. and the little bear fell asleep ... and the little frog fall asleep ... and the child fell asleep .

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



