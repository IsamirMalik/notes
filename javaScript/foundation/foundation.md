# Variables

<details>
<summary>Declaration</summary>

## Var
 - **Re-declaration** ✅
 - **Hoisting** ✅
 - **Global / Functional scope** 


## Let
 - **Block-Scope**
 - **Re-assigned**

### Differences Between `let` and `var`
> All of it is also valid for const

 1. `let` and `const` were introduced in EcmaScript 6 , `var` is available in all versions .
 2. `var` is scoped to the containing function or the global scope , depending where it is declared . ( it escapes all block constructs )
   
  ```js
  for( let variable = 1 ; variable < 5 ; variable++){
    console.log(variable) // prints 1 to 4
  }
    console.log(variable) // variable is not defined

  for( var num = 1 ; num < 5 ; num++){
    console.log(num) // prints 1 to 4
}
    console.log(num) // prints 5
  ```

 3. In the top scope ( outside any function and block ) , var declaration put an element in the global object , let does not .
   ```js
   let i = 5 ;
   var j = 5 ;
   console.log(this.i) // 5
   console.log(this.j) // undefined
   ```

 4. Re-declaration :- Declaring a variable twice using `var` does not produce an error , let does .
   
   ```js
    var x = 5;
    var x = 6;

    let x = 80; // identifier x has already been declared .

    let y = 8;
    let y = 20; // identifier y has already been declared .
   ```

 5. Hoisting :-
    - JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code. ( Mdn )
    -  Variables and function declarations are technically not “moved” anywhere. They’re visited and registered in lexical environments before any code is executed. ( Secrets of Js Ninja )
    -  Js Executes the code in two phases ( first - compilation / creation / scope resolution phase second - Interpretation / execution phase ) during phase 1 all formal declarations are read , this mechanism of knowing variables before their declaration line is termed as hoisting . ( it is a consequence of js scoping mechanism ) .
      -  `var`-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet. You can see var declarations as being "lifted" to the top of its function or global scope. However, if you access a variable before it's declared, the value is always `undefined`, because only its declaration and default initialization (with undefined) is hoisted, but not its value assignment. (mdn)

  - #### Temporal Dead Zone :-
    -  The area between the start of a block and a `let` and `const` declaration is known as the `Temporal dead zone` .
    ```js
      {
        console.log(x); // ReferenceError: Cannot access 'x' before initialization
        let x = 5
      }
    ```
    A variable declared with `let` and `const` is said to be in `Temporal dead zone` from the start of the block until the code execution reaches the place where the variable is declared and initialized .
   
</details>

<details>
<summary>Scope</summary>

## Definition
 1. The scope is the current context of execution in which values and expressions are "visible" or can be referenced.If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa. ( Mdn )
 2. A scope is a part of the program in which a certain name is bound to a certain variable. ( Secret to Js Ninja )
 3. The scope of a variable is the region of your program source code in which it is defined. ( Js the definitive Guide )

## Types
  ### Global Scope :- 
   Global Scope means a variable or function is defined in the outermost context , it is the widest scope available , Varibales / functions declared in this scope can be accessed anywhere ( inside a function / block / if statement etc ...) in the program .

  ### Functional Scope :-
  When we define a function it creates a scope , Everything defined within the function is not accessible outside the function , Only code within this scope can see the entities defined inside the scope .

  ```js
  function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
  ``` 
 
 Note :- When Js tries to resolve a reference or variable , it starts looking for it in the current scope . If it cannot find that declaration in the current scope , it climbs up one scope to look for it . This process repeats until the declaration has been found . If the js parser reaches the global scope and still cannot find the reference , a reference error will be thrown .

### Block Scope :-
 The scope created with a pair of curly braces `{ }` .

 let and const declarations are scoped to the containing block. This allows you to hide data from the global scope without wrapping it in a function. ( Mdn )

 Variables declared with `let` and `const` are block scoped , can't be accessed outside the block they are defined in .

 ```js
 {
    let x = 5;
    var y = 5;
    const z = 5 ;
}

console.log(y) // 5
console.log(z) // ReferenceError : z is not  defined                            
console.log(x) // ReferenceError : x is not  defined         
 ```

 ### Lexical Scope :-
  - Lexical scope is a fundamental concept in JavaScript that determines the accessibility of variables and functions based on their location (Where they are written) in the source code. Lexical scope is static and remains the same throughout the program’s execution. ( Global / Local / Block are part of this )
    - Nested Scope :- Inner functions have access to variables in their parent functions.
    ```js
        function outer() {
          let count = 0; // variable in outer scope
          function inner() {
            count++;      // inner function "remembers" count
            return count;
          }
          return inner;
        }

        const counter = outer();  // outer() finishes, but inner still has access
        console.log(counter());   // 1
        console.log(counter());   // 2
        console.log(counter());   // 3
    ```
  - Every time JavaScript code runs, it creates a `lexical environment` to manage the variables and functions defined within a particular part of the code. A `lexical environment` consists of:
     - Environment Record – Stores variables and functions within the scope.
     - Reference to the Outer Environment – Keeps a link to the outer lexical environment (often called the parent environment), which allows for scope chaining.
    JavaScript uses the Lexical Environment to determine variable accessibility based on where the code is written (not necessarily where it’s executed). This process is known as lexical scoping.

    - Lexical scope is determined by the code structure at compile time. When a variable is called, JavaScript resolves it by searching within the local scope first, then progressively moving outward through parent scopes until it reaches the global scope .This process is known as the `scope chain`.
    - Scope chaining is JavaScript’s mechanism to look for variable values by moving up through multiple scopes until it finds the variable or reaches the global scope. This process works through lexical scoping, meaning the structure of your code (where functions are written) determines which scope is searched first.
      ```js
      globalVar = "I'm global!";

      function outerFunction() {
        let outerVar = "I'm outer!";

          function innerFunction() {
            let innerVar = "I'm inner!";

            console.log(globalVar); // Accessible due to scope chaining
            console.log(outerVar);  // Accessible due to scope chaining
            console.log(innerVar);  // Directly accessible
          }

        innerFunction();
      }   

        outerFunction();
      ```

</details>


