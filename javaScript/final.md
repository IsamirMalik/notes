## What is JavaScript

javascript is one of the core technologies of the web , alongside HTML and Css .
It is a high-level , interpreted programming language that can be used on the client side as well as the server side with node.js

- JavaScript borrows most of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.

- Case Sensitive .
- In JavaScript, instructions are called statements and are separated by semicolons (;). A semicolon is not necessary after a statement ( In a computer programming language, a statement is a line of code commanding a task. Every program consists of a sequence of statements. ) it is written on its own line. But if more than one statement on a line is desired, then they must be separated by semicolons.

## What is Js used for ?

- DOM manipulation .
- Event handling .
- Asynchronous requests .
- Animations & Effects .
- Data manipulation ( sorting & filtering ) .
- Storing data ( localStorage / cookies ) .
- Single page Application .
- Creating APIs and web services ( node.js / deno )

## Using the Console

- Console is an object with many methods and properties .
- To execute function or method use () with it . use dot to use methods or properties available for an object .
- we get undefined if our code does not result in something . ( ohterwise we get the result like 5 + 5 = 10 )
- use clear() to clear the console .
- console.error , console.warn , .table , group ( starts here toggle arrow) and groupEnd ( ends here )
- To add style to console.log , declare the style and use (%c'Hello world' , styles)

## Comments and Some shortcuts 

- Ctrl + / = to comment something ( // )
- /*   ----   */
- ctrl + shift + L = select all same words 
- ctrl + shift + O = search for a file ( command palet )
- find = ctrl + F


## Variables & Constant

- Containers for data .
- Ways
    1. **Var**
    2. **Let** 
    3. **Const**

- Naming Conventions 
    1. Only starts with letters , numbers , underscores and dollar signs .
    2. Can't start with a number .

- Multi-word formatting 
    1. firstName -> **camelCase**
    2. first_name -> **underscore**
    3. FirstName -> **PascalCase**
    4. firstname -> **lowercase**

- Re-assigning Variables 
    - let allows re-assigning , const doesn't allows .
    - we can declare with initializing ( let )
    - we can't declare without initializing ( const ) .
    - using const we cant re-assign the varaible but we can manipulate the previous value .


## Data Types 

### Primitive Data Types

**a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.**

**Immutable : means they can not be altered**

**Stored directly in the stack , where it is accessed from**

- Primitives have no methods but still behave as if they do. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead. 

 - **String** - Sequence of characters , must be in quotes or backticks .
 - **Number** - Integers as well as floating-point numbers .
 - **Boolean** - Logical entity / true or false ( two state value )
 - **Null** - Intentional absence of any object value . - Type is Object . ( Null is a keyword (have special meaning in js) but undefined is a normal identifier (an identifier is used to link a value to a name) that happens to be a global property .)
 - **Undefined** - A variable that has not yet been defined / assigned .
   - A return statement with no value (return;) implicitly returns undefined.
   - Accessing a nonexistent object property (obj.iDontExist) returns undefined.
   - A variable declaration without initialization (let x;) implicitly initializes the variable to undefined.
   - Many methods, such as Array.prototype.find() and Map.prototype.get(), return undefined when no element is found.
   - 
 - **Symbol** - Built-in Object whose constructor returns a unique symbol .
 - **BigInt** - Numbers that are greater than the Number type can handle . 

### Static Typing vs Dynamic Typing

 - The process of verifying and enforcing the constraints of types—type checking—may occur at compile time (a static check) or at run-time (a dynamic check).

 - JavaScript is a dynamically-typed language . This means , we do not explicitly define the types for our variables . Many other languages are statically typed languages such as C, C++ and Java .
  
 - TypeScript is a superset of Js , which allows static-typing . This can make your code more verbose and less prone to errors . 

### Reference types

**Stored in the heap and accessed by reference**
- Funciton 
- Array 
- Object