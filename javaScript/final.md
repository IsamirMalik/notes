## What is JavaScript

javascript is one of the core technologies of the web , alongside HTML and Css .
It is a high-level , interpreted programming language that can be used on the client side as well as the server side with node.js

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
 - **String** - Sequence of characters , must be in quotes or backticks .
 - **Number** - Integers as well as floating-point numbers .
 - **Boolean** - Logical entity / true or false ( two state value )
 - **Null** - Intentional absence of any object value . - Type is Object .
 - **Undefined** - A variable that has not yet been defined / assigned .
 - **Symbol** - Built-in Object whose constructor returns a unique symbol .
 - **BigInt** - Numbers that are greater than the Number type can handle . 

### Static Typing vs Dynamic Typing

 - JavaScript is a dynamically-typed language . This means , we do not explicitly define the types for our variables . Many other languages are statically typed languages such as C, C++ and Java .
  
 - TypeScript is a superset of Js , which allows static-typing . This can make your code more verbose and less prone to errors . 

### Reference types

- Funciton 
- Array 
- Object