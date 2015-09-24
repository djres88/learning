NOTES FOR CHAPTER 3
/*
I. Defining a Function
  A. Conceptually:
    — Think of a function as a type of VARIABLE; the variable's content just happens to define a function. (The variable could also contain a string, or a number, or no value at all [e.g. x = ""])
  B. Example: SQUARE function                                 */
    var square = function(x) {
    return x * x;
    };
    // SHORTHAND = NOTE:DECLARATION NOTATION (eliminates the need for var):
    function square(x) {
      return x * x;
    }
/*
  C. Components
    — VAR SQUARE: define function the same way you would a variable. 'var square' creates a variable called square; you then define this variable on the right side of the equation.
    — FUCNTION(X): create the function with the word "function"; the variable "x" is called a PARAMETER for the function.
    — SQUARE(12): an ARGUMENT is the actual value of the variable that gets passed trhough to the function. AGAIN: x is the parameter; 12 is the argument.
    — { }: THE BODY of the function exists between the braces. Here, it containes only a single statement: return x * x
    — RETURN: the return statement determines the value the function returns. A quiz q
***NOTE/Quiz Question: What's the difference between a PARAMETER and an ARGUMENT.

  D. About Parameters
    — Function can have multiple parameters or none at all */
    function makenoise() {
      console.log("NOISE!")
    }
/****NOTE/Quiz?: Define a function POWER that has two parameters (i.e. takes two arguments), base and exponent, and produces the result.
  — NOTE: ASK MATT: True? Not every parameter must take an argument; some are optional.

II. SCOPES, PARAMETERS & LOCALITY/GLOBALITY OF VARIABLES
  A. SCOPES
    — Initial value of a parameter is given by the caller of the function
      --> square(7)
  B. LOCAL VARIABLES: The parameter and other variables defined WITHIN the function are said to be local to the function.
      NOTE/QUIZ?: what are local variables?
      *** For example, result --> 49 for trial 1; but if you write square(9) the next time, result--> 81
      *** MEANING: the variable definition exists only inside the function, so they don't interfere with each other
  C. GLOBAL VARIABLES: variables declared OUTSIDE of any function are said to be global. NOTE/QUIZ?: What are global variables?
      — They are "visible" throughout the Program
      — Because all functions can "see" them, they hold value within all functions.
      — You can access these variables from inside a function -- as long as you haven't declared a variable with the same name. */
      var x = 5;
      var f1 = function() {
        x *= 5;
        return x;
      };
      console.log(x);
      // --> 25
/* D. LOCAL v GLOBAL EXAMPLE:
    — BUT look what if you declare a local variable (x) with the same name as the global variable (x): */
     var x = 5; // global variable
     var f2 = function() {
       x = 3;
       x *= 5;
       return x;
     };
     console.log(x);
     // --> 15
/*
   E. SCOPES on SCOPES (NESTED SCOPES)
    — You can create functions inside of functions, resulting in several degrees of locality. Note how the variable x (and count, for that matter) is working in two different functions, up and down.
    // EXAMPLE            */
    var updown = function() {
      var result = "";
      function up(x) {
        for (var count = 0; count < x; count++)
          result += "^";
      };
      function down(x) {
        for (var count = 0; count < x; count++)
          result += "_";
      };
      up(Number(prompt("How many up?")));
      down(Number(prompt("How many down?")));
      return result
    };
    console.log(updown());
/*
        NOTE: in JS, functions are the ONLY way to create local variables. You can use brackets { } elsewhere, but these do not create a new environment. */
            var x = 1;
            {
              var x =2;
            }
            console.log(x);
            / --> 2
/*
III. FUNCTIONS AS VALUES (AND VARIABLES)
  A. BACKGROUND
    — functions variables USUALLY act as names for a piece of a program
    — BUT you can pass functions as arguments to other functions, store functions in new places, etc.
  B. EXERCISE
    NOTE/Quiz?: Write a function and use it as an argument in another function. */
      function tellmewhentogo() {
        time = Number(prompt("Tell me when to go (in seconds).",""));
        if (time < 1)
          return "GO!";
        else if (time <= 10)
          return "Go soon.";
        else if (time > 10)
          return "You'd better wait a bit before you go.";
        else (time >= 1000)
          return "Never ever go.";
      };
      function upcase(tellmewhentogo) {
        return tellmewhentogo().toUpperCase();
      };
/*

IV. THE CALL STACK, or HOW CONTROL FLOWS THROUGH FUNCTIONS
WHAT? ASK MATT OR FIND A BETTER EXPLANATION.

V. OPTIONAL ARGUMENTS
  A. JS is open-minded about the # of arguments you can add. */
   alert("Hello", "Good Evening", "How do you do?"); /*
   produces only "Hello", ignoring other arguments, as alert only takes one argument.
  B. TAKEAWAY: If you pass to many arguments to JS, it ignores the extras. If you pass too few, the missing parameters are assigned undefined.
    — Downside: accidentally passing too many arguments.
    — Upside: optional arguments
  C. OPTIONAL ARGUMENTS EXAMPLE: */
      function power(base,exponent) {
        if (exponent == undefined)
          exponent = 1;
        var result = 1;
        for (count = 0; count < exponent; count++)
          result *= base;
        return result;
      }
      // ^ the above example will return the base value if no exponent is given; that is, it will assume the value for exponent = 1: //
      console.log(power(4));
      /--> 4
      console.log(power(4,3));
      /--> 64
/*

VI. CLOSURE
  A. What happens to local variables when the function call that created them is no longer active?
A much better explanation of closure: http://blog.jhades.org/really-understanding-javascript-closures/
define a function that increments a counter in a loop: */

function closureExample() {
    var i = 0;
    for (i = 0; i< 3 ;i++) {
        setTimeout(function() {
            console.log('counter value is ' + i);
        }, 1000);
    }
}
// call the example function
closureExample();

/* The variable i exists OUTSIDE the anonymous logging function. So when this function gets passed through the setTimeout method, how can the function possibly have access to variable i? (NOTE ? FOR MATT: Isn't the variable global within the context of the anonymous function, given that the anonymous function is nested within closureExample?)

ANSWER: When the anonymous logging function is passed to the setTimeout method, the Javascript engine detects that for the function to be executed in the future, a reference will be needed to variable i. To solve this, the engine keeps a link to this variable for later use, and stores that link in a special function scoped execution context.

Such a function with 'memory' about the environment where it was created is simply known as: a CLOSURE. This is because the function inspects it's environment and closes over the variables that it needs to remember for future use.

NOTE/Quiz?: What is a closure?
NOTE/Quiz?: Give an example of a closure.

VII. RECURSION: Function calling itself
  A. Example: Power calling Power */
  function power(base,exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * power(base, exponent -1);
  }
/* ^ The above function calls itself multiple times with diff't arguments. ^WHAT'S HAPPENING HERE? I UNDERSTAND THE FIRST LOOP — IF, SAY, WE'RE LOOKING AT power(2,3) THEN THE ELSE LOOP IS: */
      2 * power(2,2)
/* But what triggers the loop, or the end for that matter? And how does the else argument know what power means?

TRYING TO FIND A BETTER EXPLANATION... HOLD TIGHT...
(1) https://www.codecademy.com/courses/javascript-lesson-205/0/1
    (a) Recursion Example #1   */
              function factorial(n) {
                if (n === 0) {
                  return 1;
                }
                // This is it! Recursion!!
                return n * factorial(n - 1);
              }
              factorial(10)
              --> 3628800 (or 10*9*....*1)
/*
    (b) Recursion Example #2 */
              function factorial(n) {
              // This is our Base Case - when n is equal to 0, we stop the recursion
              if (n === 0) {
                return 1;
              }
              // This is our Recursive Case
              // It will run for all other conditions except when n is equal to 0
              return n * factorial(n - 1);
              }
              /* Ohhhhhhhhhh that's way easy. You need a Base Case that stops the recursion; without the Base Case, the recursion goes on indefinitely. (Hence "recursion" -- because it RECURS, you stupid.) Its function is the same as WHILE or the middle portion of a FOR statement (COUNT = 1; COUNT < LIMIT; COUNT++)
              NOTE/MATT?: Why the "n === 0"???
    (c) Recursion Example #3: Termination condition
    --> Suppose you want to terminate the recursion in the case of bad input. (The Base Case is a FORM of termination condition, but it's used more to stop a successful recursion after completion.) For example: */
              function factorial(n) {
              // This is a termination condition:
              if (n < 0)
                console.log("negative numbers are not allowed");
                return;
              // This is the Base Case (NOTE/MATT: Why not else if?):
              if (n == 0)
                return 1;
              // This is the recursion, which runs (a) IFF the termination condition is false AND (b) UNTIL the Base Case is true.
              else
                return n * factorial (n-1);
              }
/*
    (d) Your recursion must lead to your base case! NOTE/Quiz?: Why must your recursion lead to your Base Case/what happens if it doesn't?
    For example, note the problem with: */
            function factorial(n) {
            if (n == 0)
              return 1;
            else
              return n * factorial (n);
              // ^ Problem: the variable n is never reduced, so the recursion goes on. You get stuck running down Bowser's hallway (i.e. in an infinite loop).
            }
/* --- CONTINUING WITH CODEACADEMY FOR NOW; THEY'RE BETTER AT EXPLAINING RECURSION, I THINK.
  B. DECONSTRUCTING RECURSION
    (1) Diff between loops and recursion:
      — They're very similar, and in some cases interchangeable.
      — Some programming languages don't even have loops like WHILE or FOR; they just have recursion.
      EXAMPLE: THE SAME FUNCTION USING A LOOP/RECURSION: */
      function marcoPolo_loop(number) {
        for (count = 1; count <= number; count++);
          console.log("Marco");
          console.log("Polo");
      }
      VERSUS
      function marcoPolo_recursive(number) {
        if (number === 0)
          return;
        else{
        console.log("Marco");
        console.log("Polo");
        count_down = number - 1;
        marcoPolo_recursive(count_down);
        }
      }
/*
    (2) And what if you don't know how many times to recur? Example: guess the color of my suit: */
    function guessMySuit("color") {
      guess = prompt("What color is my suit?","");
      if (guess == color)
        return console.log("How did you know? Were you watching me dress?");
      else
        console.log("Guess again.");
        return guessMySuit(color);
    }


  B. Efficiency vs. Simplicity
    — The recursive version is easier to understand/look at (not for me), but the loops are typically faster.
    ***I don't understand why you wouldn't make things fast if it takes the same amount of time. Intuitively, I think I understand the value in splitting functions into even branches to make them run faster depending on the inputs.

    Say, for example, I'm thinking of a number between 1 and 1000, and you're trying to guess my number. After each guess, I'll tell you whether my number is higher or lower. Assuming you want to figure out my number in as few guesses as possible, you'll guess 500 first, followed by (if I say "lower") 250, and so on. You should get to my number in fewer than 10 guesses, because 2^10 > 1000. In this way is your "program" most efficient: You eliminate the non-possibilities, or the irrelevant procedures, as quickly as possible. So what I'm asking is, when it comes to programs, what's the value in choosing the beautiful-and-stupid (in the extreme) over ugly but smart???

VIII.
