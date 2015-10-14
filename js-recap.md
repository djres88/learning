#JavaScript Refresher

##I. Data Types & Basic Operators

###1. Confirm, prompt, and console.log
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

###2. Data types
a. numbers (e.g. 4.3, 134)
b. strings (e.g. "dogs go woof!", "JavaScript expert")
c. booleans (e.g. false, 5 > 4)

You can get a string's length using the .length operator.

###3. Conditionals
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
###4. Comparison Operators

| Operator | Definition                       |
-----------|----------------------------------|
    ==     |  "equal to"                      |
    !=     |  "not equal to"                  |
    <      |  "less than"                     |
    `>`    |  "greater than"                  |
    <=     |  "less than or equal to"         |
    `>=`   |  "greater than or equal to"      |   
    &&     | "And" (tests both elements)      |
    `||`   | "Or" (tests either element)      |


For && and ||, note that the syntax is

###5. Math
Works the same way as regular math, with order of operations and all. The relevant symbols are +,-,* and /.

One more symbol -- %, or modulo -- returns the remainder of dividing a numerator by a denominator. For example, console.log(10 % 3) prints the number 1 to the screen.

###6. Substrings
Sometimes you don't want to display the entire string, just a part of it. Use substring like so:
```JavaScript
"some word".substring(x, y)
```
where x is where you start chopping and y is where you finish chopping the original string.

###7. Element Positions
When you refer to an element of a string (or an array, which you'll learn later), you need to know that JavaScript begins counting at 0. For example, in the substring method above, let's say you wanted to extract "some" from the string "some word." Here's how you would do it:
```JavaScript
"some word".substring(0,4)
```
See how that works? NOTE that the index element indicated y is NOT included in the return value; it's where JavaScript stops. For example, "Hello".substring(0,3) will return "Hel", not "Hell".

##II. Variables
###1. Intro
To do anything useful, JavaScript needs to hold onto (a/k/a "save" or "store") the values you create -- at least for a little while. We do this with variables.

Variables are your way of assigning a name to a yet-unknown value. For example, let's say we want to take a number that *the user gives us* and multiply this number by 5. In regular math, we might call the user's number x. We would write our expression as x*5.

JavaScript variables work much in the same way as the variables you learned in school. The main difference: Before we use a variable in a JavaScript expression (e.g. x*5), we first need to tell JavaScript what the symbol "x" means. We do this by **declaring** the variable.

Declaring a variable is simple. If we wanted to give x a default value of 3, we would do the following:
```JavaScript
var x = 3
console.log(x*5)
--> 15
```
Even more useful for our times-five example, you can declare a variable that asks for a value from the user. Meet the method **gets()**, which you'll learn more about later. The following code asks the user for a value, multiplies that value by 5, and prints the value to the screen.
```JavaScript
var x = gets().to_i
console.log(x*5)
--> (user input)*5
```
###2. Operate on Variables
Once you declare a variable, you can operate on it using the same methods as you would for its literal data type. For example, we already know that we can ask for the length or substring element of the string "Hullabaloo":
```JavaScript
console.log("Hullabaloo".length);
-->10
console.log("Hullabaloo".substring(0,5));
-->"Hulla"
```
But we can also use the same techniques to operate on a variable assigned to "Hullabaloo":
```JavaScript
var funny_word = "Hullabaloo"
console.log(funny_word.length);
-->10
console.log(funny_word.substring(0,5));
-->"Hulla"
```
As you saw in the intro, we can do the same by declaring variables for numbers:
```JavaScript
var x = 7
var y = 2
console.log(x*y);
-->14
```
