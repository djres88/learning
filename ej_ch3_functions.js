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
DIDN'T REALLY GET THIS EITHER...

VII. RECURSION: Function calling itself
