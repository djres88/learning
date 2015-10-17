#JavaScript Refresher

##I. Data Types & Basic Operators
###1. JS Intro
If you're new to programming, you're about to learn the most important skill of your career.

Why is programming so important? Because computers are, at their core (literally), almost impossible for humans to work with.

Computers store and manipulate data using nothing but 0s and 1s -- or rather, billions of 0s and 1s.
https://s-media-cache-ak0.pinimg.com/originals/cf/2c/28/cf2c2868aa3732641b4383b27ef03060.jpg
They write, erase, and rewrite these 0s and 1s, all day long. If you wanted to say the number **13** to a computer, you would need to write **1101**. You don't need to understand why. (If you *really* want to learn binary, Google it. Have a fun hour.)

Humans need to communicate with machines, but they don't want to work with 0s and 1s all day; that would be long, boring, and extremely inefficient. That's why we invented programming languages. Well, not *us*, exactly, but someone did. And we're glad. By translating all the 0s and 1s into a relatively easy-to-understand "code," programming languages make it possible for humans to communicate with, and provide instructions to, our essential modern-day companion: the computer.

Computers are involved in nearly every activity in the modern global economy. So it stands to reason that the masters of computers shall rule the earth -- and also control a sizable portion of its wealth. Until that day when the computers revolt and become the masters, which will probably happen in (best guess) 2032, your best bet is to learn how to manage what they do. Who knows, your coding knowledge might even be able to negotiate a deal for you and your family, when the doomsday comes. In the meantime, learning programming is sure to vault you into a Scrooge McDuck-sized pool of money. Computers play a bigger role than ever in the economy, which means we need someone to manage them. That someone is you. In three-to-six months.

So there you have it: programming in a nutshell. But why learn *JavaScript?*?

JavaScript is particularly useful -- essential, actually -- for communicating to, on, and between websites. Along with its partners-in-crime CSS and HTML (whom you'll learn about later), JavaScript is the language behind nearly all your favorite websites. For a preview, go to your favorite website on Chrome and hit `<CMD+option+j>`. The raw code is laid bare for all to see. (There's no shame or modesty online -- but then, you probably already knew that.) Are you looking at the code? By the end of this course, you'll learn how to write code just like the one you're seeing.

Because JavaScript is ubiquitous in everything online, learning JavaScript gives you extremely useful knowledge for all kinds of jobs. Front-end developers use JavaScript to x; other people use JavaScript to y; (series of things). In short, learning JavaScript opens you and your career to some of the most lucrative jobs on the market, at some of the best companies in the world. Even better for you, there is a shortage of people who know how to do these jobs well. Suffice it to say: If you get good, you will do well.

Lastly, and maybe most importantly, learning JavaScript allows you to take on more fun, rewarding, and creative work on the side. Have an idea for a new website? Make it yourself. Want to customize your blog? Now you can. Stupid online games? Absolutely. Flight scrapers, online financial tools, fantasy football trackers -- you can build anything you want. Everything you see while browsing away the day online was once just an idea, and now it's real -- thanks to JavaScript.

Now let's start learning.

###2. Data Types & Basic Operators

There are six main data types in JavaScript.

a. numbers (e.g. 4.3, 134)
b. strings (e.g. "dogs go woof!", "JavaScript expert")
c. booleans (e.g. false, 5 > 4)
d. objects
e. functions
f. undefined values



####a. Number Operators (Math)

####b. String Operators
You can get a string's length using the .length operator.

####c. Booleans (True/False Conditions)


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

JavaScript variables work much in the same way as the variables you learned in school. The main difference: Before we use a variable in a JavaScript expression (e.g. x`*`5), we first need to tell JavaScript what the symbol "x" means. We do this by **declaring** the variable.

###2. Declaring Variables
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
###3. Operating on Variables
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

##III. Functions
###1. Declare a Function
Use functions to teach the computer how to do tasks automatically. Let's say you want to divide any number by three:
```JavaScript
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
```
The code above declares a variable, divideByThree, and assigns it a function. This function takes one *parameter* -- number. Inside the curly brackets, the number is divided by 3; this value, in turn, is stored as the variable *val*. Finally, the value *val* -- which equals number/3 -- is printed to the screen.

You can call a function by entering a value for its parameter. Let's say we want to call the function divideByThree with the parameter 24:
```JavaScript
divideByThree(24);
--> 8
```
Note that when you call a function, you need to enter the right data type (and in most cases, the correct number of parameters) as required by the function. Some functions require strings as input:
```JavaScript
var sayWho = function(name) {
  console.log("This is + " name + ".");
}

sayWho("me");
--> This is me.
```
Other functions may require two parameters:
```JavaScript
var area = function(length,width) {
  console.log(length*width);
}
```

###2. if, else if, else
(You know how to do this. Just make sure there's no condition on the "else" line. See the "Rock, Paper, Scissors exercise on CodeAcademy for example. The result of the exercise is copied below.")
```JavaScript
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    }
    else {
        if (choice2 === "paper") {
            return "scissors wins";
        } else {
            return "rock wins";
        }
    }
}
compare(userChoice,computerChoice)
```
###3. return vs. console.log
Sometimes, rather than printing the result of a function to the screen, you'll want the function to ```return``` a value. That way you can use the value elsewhere in the program. For example:
```JavaScript
var oneTime = function(howMany) {
  var times = prompt("How many times?");
  return times;
}
```

##IV. Loops
###1. For Loop
We want the computer to perform a task until a certain criteria is met. First, check out an example and see if you can figure out what the computer is doing:
```JavaScript
for (var i = 1; i < 11; i ++){
	console.log(i);
}
```
First, define the for loop. The first part of the for loop (inside the parentheses) has three components: var i = 1 (variable definition); i < 11 (end condition); and i += 1 (action after each iteration). In the second part (console.log(i)), we print the variable to the screen through each iteration.

The above example will begin by printing "1", the initial value for variable i. The loop will go back to the beginning and add 1 to i, then print i (this time i = 2). The loop will continue adding and printing i (3, 4, 5) until the condition (i < 11) returns false.

###2. Rules for Loops
There are some handy shortcuts to learn for loops, most of them involving the action to perform after each iteration. Above, the "i ++" is short for i = i + 1. Here are a few more shortcuts:
| Syntax | Action |
---------|---------------------|
| i += 3 | Adds 3 to i         |
| i -= 6 | Subtracts 6 from i  |
| i--    | Reduces i by 1      |
| i++    | Increases i by 1    |
---------|---------------------|

##V. Arrays
Variables can store numbers or strings. But so far, we've only been able to store ONE number or ONE string. Good thing we have arrays. Arrays:

  * a. store lists of data
  * b. can store different data types at the same time
  * c. are ordered so the position of each piece of data is fixed

These are all arrays:
```JavaScript
var arrayOne = [1, 2, 3];
var arrayTwo = [1, "beans", 77];
var arrayThree = ["What?", "Who?", "Beans"];
```
Whenever you see the brackets [], you're looking at an array.

###1. Access Data in Arrays
Data in the array is in a fixed position. To access an item, you can call its position in the array like so:
```JavaScript
console.log(arrayThree[2]);
--> Beans
```

###2. Print Array Elements with a For Loop
Easiest to show by example:
```JavaScript
// Let's print out every element of an array using a for loop
var cities = ["Melbourne", "Amman", "Helsinki", "NYC"];
for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
```
