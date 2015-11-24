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
  — .length can be a method of a string (counts the # of characters) OR an array (counts the # of elements)         /*
  A. ARRAY OBJECT METHODS EXAMPLE
  - NOTE: FOR QUIZZES, FIND A COMPLETE LIST OF METHODS AND ADD TO ANKI.  */
                    var mack = [];
                  mack.push("Mack");
                  mack.push("the", "Knife");
                  console.log(mack);
                  // → ["Mack", "the", "Knife"]
                  console.log(mack.join(" "));
                  // → Mack the Knife
                  console.log(mack.pop());
                  // → Knife
                  console.log(mack);
                  // → ["Mack", "the"]
/* B. STRING OBJECT METHODS EXAMPLE
- NOTE: FOR QUIZZES, FIND A COMPLETE LIST OF METHODS AND ADD TO ANKI.

IV. OBJECTS: Values of the type object are arbitrary collections of properties, and we can add or remove these properties as we please.
  A. Curly Brace Notation */
          var day1 = {
            squirrel: false,
            events: ["work", "touched tree", "pizza", "running",
                     "television"]
          };
          console.log(day1.squirrel);
          / → false
          console.log(day1.wolf);
          / → undefined
/*
         — Inside the curly braces, we can give a list of properties separated by commas.
          — Each property is written as a name, followed by a colon, followed by an expression that provides a value for the property.
          — Spaces and line breaks are not significant.
          — Properties whose names are not valid variable names or valid numbers — such as "today's events:" — have to be quoted.
  B. Curly Braces: Braces have two meanings in JavaScript.
      (1) At the start of a statement, they can start a block of statements, as in a function or if-statement: */
        if (x == 0) {
          return ("MOE: This is a block with one statement.");
          return ("LARRY: No it's not. It's two statements.");
          return ("CURLY: Hey what's going on?");
        }
/*
    (2) In any other position, braces describe an object (see squirrels xample above)
  C. Object Operators
    (1) delete: removes a property from an object                */
            var anObject = {left: 1, right: 2};
            console.log(anObject.left);
            // → 1
            delete anObject.left;
            console.log(anObject.left);
            // → undefined
/*
    (2) in: when applied to a string and an object, returns a Boolean value that indicates whether an object has that property:   */
            var anObject = {left: 1, right: 2}
            "left" in anObject = true
/*
  D. Arrays are just a specialized type of object used for storing sequences of things: */
            var journal = [
              {events: ["work", "touched tree", "pizza", "running", "television"],
              squirrel: false},
              {events: "work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
              squirrel: false},
              {events: ["weekend", "cycling", "break", "peanuts", "beer"],
              squirrel: true},
            ];
/*
V. MUTABILITY: important concept. Unlike strings/numbers/Booleans, two diffent objects with the same properties are NOT equal. Why? Because they are mutable. An example: */
            var object1 = {value: 10};
            var object2 = object1;
            var object3 = {value: 10};

            console.log(object1 == object2);
            // → true
            console.log(object1 == object3);
            // → false

            object1.value = 15;
            console.log(object2.value);
            // → 15
            console.log(object3.value);
            // → 10
            /*

VI. LYCANTHROPE LOG EXERCISE
  A. Setup: */
    var journal = [];
    function addEntry(events, didITurnIntoASquirrel) {
      journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
      });
    }
    /*
  B. Logging entries:   */
    addEntry(["work", "touched tree", "pizza", "running",
              "television"], false);
    addEntry(["work", "ice cream", "cauliflower", "lasagna",
              "touched tree", "brushed teeth"], false);
    addEntry(["weekend", "cycling", "break", "peanuts",
              "beer"], true);
      /*
  C. A note on correlation:
  ϕ can be computed using the following formula, where n refers to the table:
            ϕ =	n11n00 - n10n01 / √ n1•n0•n•1n•0
  The notation n01 indicates the number of measurements where the first variable (squirrelness) is false (0) and the second variable (pizza) is true (1). In this example, n01 is 9.

  The value n1• refers to the sum of all measurements where the first variable is true, which is 5 in the example table. Likewise, n•0 refers to the sum of the measurements where the second variable is false.

  So for the pizza table, the part above the division line (the dividend) would be 1×76 - 4×9 = 40, and the part below it (the divisor) would be the square root of 5×85×10×80, or √340000. This comes out to ϕ ≈ 0.069, which is tiny. Eating pizza does not appear to have influence on the transformations.
