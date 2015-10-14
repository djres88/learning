#CodeAcademy 1-1

##1. Confirm, prompt, and console.log
We can make pop-up boxes appear!
```JavaScript
confirm("I am ok");
prompt("Are you ok?");
```
We can also print the result of code to the string using console.log:
```JavaScript
console.log(5*7)
--> 35
```

##2. Data types
a. numbers (e.g. 4.3, 134)
b. strings (e.g. "dogs go woof!", "JavaScript expert")
c. booleans (e.g. false, 5 > 4)

You can get a string's length using the .length operator.

##3. Conditionals
If the first condition is met, the first code block is executed. If it is not met, an indefinite number of "else if" statements will test, and will execute their code blocks if true. If none of the "else if" statements are true -- or if there are none present -- the final code block (under "else") will execute.
```JavaScript
if (word.length === 3) {
  console.log("Your word has three characters!");
}
else if (word.length <= 10){
  console.log("Your word has a reasonable length.");
}
else {
  console.log("You picked a funny word. That word is funny. Man, are you a funny person.");
}
```
##4. Comparison Operators

| Operator | Definition                       |
-----------|----------------------------------|
    ==     | Tests "equal to"                 |
    !=     | Tests "not equal to"             |
    <,>    | Tests less than, greater than.   |
    &&     | "And" (tests both elements)      |
    ||     | "Or" (tests either element)      |
           |.                                 |

For && and ||, note that the syntax is

##5. Math
Works the same way as regular math, with order of operations and all. The relevant symbols are +,-,* and /.

One more symbol -- %, or modulo -- returns the remainder of dividing a numerator by a denominator. For example, console.log(10 % 3) prints the number 1 to the screen.

#6. Substrings
