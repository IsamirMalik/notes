# String 
string is a sequence of character used to represent text .Useful for holding data that can be represented in text form .

## Creation
 **As Primitive :-**
  - Single quotes , Double quotes , Backticks , String -> *String* .
  -  ` `` ` 
     -  Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
     -  Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

 **As Object :-**
  - Constructor :- new String(value) -> Object .
      - When String() is called as a constructor (with new), it coerces value to a string primitive (without special symbol handling) and returns a wrapping String object, which is not a primitive.


## Instance Method 
  1. `string.at()`
       - Parameters
          1. Index :- The position (Index) of the string to be returned .  if a negative number is used, the character returned will be found by counting back from the end of the string.
   
       - Return :- A string located at the specified position . `Undefined` if the given index can not be found .
  ```js
     // A function which returns the last character of a given string
  function returnLast(str) {
    return str.at(-1);
  }

  let invoiceRef = "my-invoice01";

  console.log(returnLast(invoiceRef)); // '1'

  invoiceRef = "my-invoice02";

  console.log(returnLast(invoiceRef)); // '2'
  ```
 2. `string.valueOf()`
      - The `valueOf()` method of String returns the primitive value of a String object as a string data type. This value is equivalent to String.prototype.toString().
      - Parameter :- None 
      - Return :- A string representing the primitive value of a given String object. ( If the string have type Object , we can convert that into string type using this method ) 
  ```js
    const x = new String("Hello world");
    console.log(x.valueOf()); // 'Hello world'
  ```

  3. `string.toString()`
      - Parameter :- None 
      - Return :- A string representing the specified string value.

  4. `string.substring()`
      - Parameters :-
        - indexStart :- The index of the first character to include in the returned substring.
        - IndexEnd :- The index of the first character to exclude from the returned substring.
  
      - extracts characters from indexStart up to but not including indexEnd. In particular:

      If indexEnd is omitted or undefined, substring() extracts characters to the end of the string.
      If indexStart is equal to indexEnd, substring() returns an empty string.
      If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; see example below.
      Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.
      Any argument value that is NaN is treated as if it were 0.
  ```js
  const anyString = "Mozilla";

  console.log(anyString.substring(0, 1)); // "M"
  console.log(anyString.substring(1, 0)); // "M"

  console.log(anyString.substring(0, 6)); // "Mozill"

  console.log(anyString.substring(4)); // "lla"
  console.log(anyString.substring(4, 7)); // "lla"
  console.log(anyString.substring(7, 4)); // "lla"

  console.log(anyString.substring(0, 7)); // "Mozilla"
  console.log(anyString.substring(0, 10)); // "Mozilla"

  const text = "Mozilla";

  // Takes 4 last characters of string
  console.log(text.substring(text.length - 4)); // prints "illa"

  // Takes 5 last characters of string
  console.log(text.substring(text.length - 5)); // prints "zilla"
  ``` 

  5. `string.charAt()`
       - Parameter 
         - Index :- Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.
       - Return :- 
         - A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of the range of 0 – str.length - 1, charAt() returns an empty string.

       - charAt() is very similar to using bracket notation to access a character at the specified index. The main differences are:

        charAt() attempts to convert index to an integer, while bracket notation does not, and directly uses index as a property name.
        charAt() returns an empty string if index is out of range, while bracket notation returns undefined.
      
  ```js
     const anyString = "Brave new world";
     console.log(`The character at index 0   is '${anyString.charAt()}'`);
     // No index was provided, used 0 as default

     console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
     console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
     console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
     console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
     console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
     console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

      They results in 
     The character at index 0   is 'B'

     The character at index 0   is 'B'
     The character at index 1   is 'r'
     The character at index 2   is 'a'
     The character at index 3   is 'v'
     The character at index 4   is 'e'
     The character at index 999 is ''
  ```

 6. `string.concat()`
      -  Parameters :- One or more strings to concatenate to string.
      -  Return :- A new string containing the combined text of the strings provided.
  ```js
    const hello = "Hello, ";
     console.log(hello.concat("Kevin", ". Have a nice day."));
     // Hello, Kevin. Have a nice day.

     const greetList = ["Hello", " ", "Venkat", "!"];
     "".concat(...greetList); // "Hello Venkat!"

     "".concat({}); // "[object Object]"
     "".concat([]); // ""
     "".concat(null); // "null"
     "".concat(true); // "true"
     "".concat(4, 5); // "45"
  ```

  7. `string.endsWith()`
        - The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
        - Parameters 
          - searchString :- The characters to be searched for at the end of str. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes endsWith() to search for the string "undefined"
          - endPosition (optional) :- The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.
        - Return :-  true if the given characters are found at the end of the string, including when searchString is an empty string; otherwise, false.
  ```js
      const str = "To be, or not to be, that is the question.";

     console.log(str.endsWith("question.")); // true
     console.log(str.endsWith("to be")); // false
     console.log(str.endsWith("to be", 19)); // true
  ```

  8. `string.includes()`
       -  The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
       -  Parameters :
          -  SearchString :- A string to be searched for within str. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes includes() to search for the string "undefined", which is rarely what you want.
          -  Position (optional) :- he position within the string at which to begin searching for searchString. (Defaults to 0.)
      - Return :- true if the search string is found anywhere within the given string, including when searchString is an empty string; otherwise, false.
  
  ```js
      "Blue Whale".includes("blue"); // returns false
      "Blue Whale".toLowerCase().includes("blue"); // returns true
      const str = "To be, or not to be, that is the question.";
      console.log(str.includes("To be")); // true
      console.log(str.includes("question")); // true
      console.log(str.includes("nonexistent")); // false
      console.log(str.includes("To be", 1)); // false
      console.log(str.includes("TO BE")); // false
      console.log(str.includes("")); // true
  ```

  9. `string.indexOf()`
        - The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.
        - Parameters : 
          - SearchString :- Substring to search for. All values are coerced to strings, so omitting it or passing undefined causes indexOf() to search for the string "undefined"
          - Position (optional) : The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0. If position is greater than the length of the calling string, the method doesn't search the calling string at all. If position is less than zero, the method behaves as it would if position were 0.

          'hello world hello'.indexOf('o', -5) returns 4 — because it causes the method to behave as if the second argument were 0, and the first occurrence of o at a position greater or equal to 0 is at position 4.

          'hello world hello'.indexOf('world', 12) returns -1 — because, while it's true the substring world occurs at index 6, that position is not greater than or equal to 12.

          'hello world hello'.indexOf('o', 99) returns -1 — because 99 is greater than the length of hello world hello, which causes the method to not search the string at all.

        - Return : The index of the first occurrence of searchString found, or -1 if not found.Searching for an empty search string produces strange results. With no second argument, or with a second argument whose value is less than the calling string's length, the return value is the same as the value of the second argument .

  ```js
      "hello world".indexOf(""); // returns 0
      "hello world".indexOf("", 0); // returns 0
      "hello world".indexOf("", 3); // returns 3
      "hello world".indexOf("", 8); // returns 8

      "Blue Whale".indexOf("Blue"); // returns  0
      "Blue Whale".indexOf("Wale"); // returns -1
      "Blue Whale".indexOf("Whale", 0); // returns  5
      "Blue Whale".indexOf("Whale", 5); // returns  5
      "Blue Whale".indexOf("Whale", 7); // returns -1
      "Blue Whale".indexOf(""); // returns  0
      "Blue Whale".indexOf("", 9); // returns  9
      "Blue Whale".indexOf("", 10); // returns 10
      "Blue Whale".indexOf("", 11); // returns 10
  ```

  10. `string.slice()`
        - extracts a section of this string and returns it as a new string, without modifying the original string.
        - Parameters : 
          - indexStart : The index of the first character to include in the returned substring.
          - indexEnd (optional) : The index of the first character to exclude from the returned substring.
        - Return :  A new string containing the extracted section of the string.
  ```js
    const str1 = "The morning is upon us."; // The length of str1 is 23.
      const str2 = str1.slice(1, 8);
      const str3 = str1.slice(4, -2);
      const str4 = str1.slice(12);
      const str5 = str1.slice(30);
      console.log(str2); // he morn
      console.log(str3); // morning is upon u
      console.log(str4); // is upon us.
      console.log(str5); // ""

    const str = "The morning is upon us.";
      str.slice(-3); // 'us.'
      str.slice(-3, -1); // 'us'
      str.slice(0, -1); // 'The morning is upon us'
      str.slice(4, -1); // 'morning is upon us'
  ``` 

  11. `string.split()`
        - The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
        - Parameters :
          - Separator : The pattern describing where each split should occur. Can be undefined, a string .
          - limit (optional) : A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

          The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
          If limit is 0, [] is returned.
        - Return : If separator is a string, an Array of strings is returned, split at each point where the separator occurs in the given string.
  ```js
    const str = "The quick brown fox jumps over the lazy dog.";

      const words = str.split(" ");
      console.log(words[3]);
      // Expected output: "fox"

      const chars = str.split("");
      console.log(chars[8]);
      // Expected output: "k"

      const strCopy = str.split();
      console.log(strCopy);
      // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
  ```