/*
I. Data Sets
  A. Chunks of data are stored as ARRAYS like so:                 */
    — var listOfNumbers = [2, 3, 5, 7]                            /*
  B. You can access elements of arrays — starting at array[0] — like so: */
    — listOfNumbers[0] = 2
    — listOfNumbers[1] = 3 etc....                                      /*
  C. You can also perform operations within arrays:                     */
    — listOfNumbers[2 - 1] = 3
/*
II. Properties
  A. Almost all JS values have properties (exceptions: null and undefined)
  B. We have certain expressions to access the properties of some value. For ex: */
    — "string".length (returns length of string)
    — Math.max(x,y,z) (function that finds maximum.)                /*
  C. How to access properties: value.p and value[p]. KEY DIFF: value.x fetches the already-known property named "x"; "length" is an already-known property.
  On the other hand, value[x] tries to evaluate the expression x and uses the result as the property name; the "2" in "string"[2] is not a known property, but rather must first be evaluated as an expression. That's why you can also say "string"[5-3].
    — Use .p when you know the value you are tying to access:  */
      EX: "string".length = 6             /*
    — Use [p] when you want to extract the property held by variable p: */
      EX: x = prompt(Number("Which number character would you like to extract from the given word?"));
          // user writes "4"
          "Patches"[x] = "h"                      /*
  D. Length of arrays
    — If an array x = [1, 2, 3], you can access the number of elements using .length as well: x.length = 3.

III. Methods: Both string and array objects contain a number of properties that refer to function values. Such properties that contain functions are called METHODS of the value they belong to, as in: */
  — .toUpperCase is a method of a string
  — .push is a method of an array
  — .length can be a method of a string (counts the # of characters) OR an array (counts the # of elements)
