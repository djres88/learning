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

###8. Type Conversion
 * **Number("7")** converts the string to a number. // --> 7
 * **String(7)** converts the number to a string. // --> "7"
 * **Boolean("True")** converts the string to a Boolean value // --> True


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
###3. Ternary Operator (?) -- if, else shorthand
Can use ? in place of an if/else statement if there are only two options. Below, the first example tests whether 5 > 7. If yes, the console prints 1; if no, the console prints 2.
```JavaScript
    console.log (5 > 7 ? 1 : 2) // --> 2
```
And notice what happens when the test is true:
```JavaScript
    console.log ((6*6)==36) ? 1 : 2) // --> 1
```
TERNARY OPERATOR: basically shorthand syntax for an if-else statement

###4. return vs. console.log
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

###3. Complex For Loop
(Come back to this! Re-do on CodeAcademy)

###4. While Loop
What if you didn't know ahead of time when to stop looping? Say, for example, you wanted to keep choosing playing cards from a deck until you get a spade. You don't know how many cards you'll need to choose, so a for loop won't work. In situations like these where you don't know in advance when to stop looping, we can use a while loop.

###5. Do/While Loop
```JavaScript
var getToDaChoppa = function(){
  // Write your do/while loop here!
    var i = 0;
    do {
        console.log("Get to da choppa!");
        i ++;
    } while (i < 3)
};
getToDaChoppa();
```

###6. A Note on Brevity
You may have noticed that when we give a variable the boolean value true, we check that variable directly—we don't bother with ===. For instance,
```JavaScript
var bool = true;
while(bool){
    //Do something
}
```
is the same thing as
```JavaScript
var bool = true;
while(bool === true){
    //Do something
}
```
but the first one is faster to type. Get in the habit of typing exactly as much as you need to, and no more!

###7. Variables Within Loops
If you define a variable outside a loop, you don't need to (in fact, shouldn't) reassign the variable within the loop. For example:
```JavaScript
var i = True
while (i) {
  console.log("One time");
  i = false; // No "var" needed
}
```

###8. Recap
For
```JavaScript
for (i = 10; i <= 1000000; i *= 10) {
    console.log(i);
}
```
While
```JavaScript
var j = true
while (j) {
    console.log("The variable j is " + j);
    j = false;
    console.log("Now the variable j is " + j);
}
```
Do
```JavaScript
var k = "Now";
do {
    console.log("I want it " + k);
    k = "later";
    console.log("Not " + k);
} while (k == "Now");
```
An exercise in all three:
```JavaScript
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}
```
A quick explanation of the Math.floor(Math.random() * 2) thing:
    * 1. First we use Math.random() to create a random number from 0 up to 1. For example, 0.5.
    * 2. Then we multiply by 5 to make the random number from 0 up to 5. For example, 0.5 * 5 = 2.5
    * 3. Next we use Math.floor() to round down to a whole number. For example, Math.floor( 2.5 ) = 2
    * 4. Finally we add 1 to change the range from between 0 and 4 to between 1 and 5 (up to and including 5)

##V. Switch/Case
When there are tons of options, you don't need (or want) to type "else if" 10x.

Switch allows you to preset a number of options (called cases), then check an expression to see if it matches any of them. If there's a match, the program will perform the action for the matching case; if there's no match, it can execute a default option. For example:
```JavaScript
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
```


##VI. Arrays
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
We can also use .length to check how many elements are contained in an array:
```JavaScript
console.log(arrayThree.length);
--> 3
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

###3. Heterogenous Arrays
An array can contain data of different types -- strings, numbers, booleans, whatevs.
```JavaScript
var mixedArray = [true, "array", 7, NaN];
```
You can also put arrays *inside* arrays. Are we blowing your mind, Neo?
```JavaScript
var raysOnRaysOnRays = [[1, 0, [true, false]], "next", ["Who", isNaN()]];
```
The degrees of nesting are commonly called the "dimensions" of an array. The array above has three dimensions, because its deepest element (the [true, false]) is three layers deep.

You can tell the number of dimensions by counting the maximum number of consecutive brackets of the same type ([ or ]) -- I think. Ask Matt. We'll come back to this later.
####Note: Dimensions, Rows and Columns of an Array
The following *two-dimensional* array has *three rows* and *two* columns:
```JavaScript
var array = [[1,2],[3,4],[5,6]]
```
  * *Dimensions* are defined by the degree of nesting. You can count the consecutive "[" or "]"
  * *Rows* are defined by the number of nested arrays. The above example includes three nested arrays: [1,2] , [3,4] and [5,6].
  * *Columns* are defined by the number of elements within each nested array. The nested arrays in the above example include two elements each.

####Note: Objects
If you create a line break between the above example....

###4. Jagged Arrays
The raysOnRaysOnRays example also happens to be a *jagged* array. Jagged arrays may have two elements in the first row, three in the second, and so on.

###VII. Objects!
Objects are just collections of information (keys and values) between curly braces, like this:
```JavaScript
var myObject = {
    key: value,
    key: value,
    key: value
};
```
For example:
```JavaScript
var me = {
    name: "David",
    age: 27
};
```
###1. Object Literal Notation vs. Object Constructor
####a. Object Literal Notation
That's what we just saw -- creating the object with curly braces {}.
  ```JavaScript
  var davidInfo = {
    name: "David",
    age: 27,
    height: "5\'8\""
  };
  ```
####b. Object Constructor
When you use the constructor, the syntax looks like this:
```JavaScript
var myObj = new Object();
```
This tells JavaScript: "I want you to make me a new thing, and I want that thing to be an Object. After you've created your object, you can add keys in one of two ways:
```JavaScript
myObj["name"] = "Charlie";
myObj.name = "Charlie";
```
To see how this plays out in practice, let's recreate davidInfo using the object constructor:
```JavaScript
var davidInfo = new Object();
davidInfo.name = "David";
davidInfo.age = 27;
davidInfo.height = "5\'8\"";
```

### 2. Examples of Objects
```JavaScript
var object1 = {
    name: "David",
    age: 27,
    job: "Starry-eyed new programmer."
}

var object2 = new Object()
object2.favoriteThingOne = "Beans";
object2.favoriteThingTwo = "Crying";
object2.arrayOne = ["Crying", "over", "spilt", "beans"];

var object3 = {
    foxOneName: "Fox Tarts",
    foxQualities: ["Wily", "Forest Creature", "Half of a famous essay by philosopher Isaiah Berlin", 7, true],
    hedgehogOneName: "Sonic",
    hedgehogQualities: ["Dirty", "Lives underground", "Half of a famous essay by philosopher Isaiah Berlin", 82, false]
}
```
### 3. Adding Objects to Arrays
```JavaScript
var myLawyer = {
    firstName: "Carlos",
    lastName: "Von Whippersnapper",
    occupation: "Attorney at Law",
    hourlyRate: "Make me an offer",
    realHourlyRate: 3,
    status: "Alive"
}
var myArray = [4, true, "beans", myLawyer];
```
The object myLayer is the fourth element of myArray!

###4. Objects within Objects: Contact List Example
There are three ways to add objects to other objects.
####a) Method one: colon:
```JavaScript
var friends = {
    bill: {},
    steve: {}
};
```
####b) Method two:
Bracket ([]) or dot(.) notation, like this:
```JavaScript
friends[bill] = {};
friends.steve = {};
```


####c) Object constructors
```JavaScript
var friends = new Object();
friends.bill = new Object();
friends.steve = new Object();
```

####d) Example
```JavaScript
var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Stevenson",
        number: ""
    }, // <-- Note the commas separating the objects.
    steve: {
        firstName: "Steve",
        lastName: "Williamson",
        number: ""
    }
}
```

###5. List & For/If
Let's say you want to list the contents of an object. We'll use the friends object we just created as an example:
```JavaScript
var list = function(x) {
    for (var key in friends) {
        console.log(key);
    }
}
--> bill
--> steve
```
Note that the word "key" is a placeholder. The loop is simply looking for all the keys -- in this case, bill and steve -- in the object "friends". The console log then returns each of these keys in order.

###6. Search Function (friends[key].lastName example)
```JavaScript
var search = function(name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
}
```
It appears that you can access a particular key of an object using the syntax ```JavaScript object.key ```. Above, friends[key] goes first through *each key* in the friends object. The first key, bill, is *itself* and object that contains several keys of its own. One of bill's keys is firstName. To access firstName directly, we could write:
```JavaScript
console.log(friends.bill.firstName);
--> "Bill"
```
Note that it does not work if we simply call bill.firstName, as the key "bill" is not defined globally.

##. RECAP/BREAK EXERCISES!
####a. FizzBuzz (Tests knowledge of if/else, modulo, and comparison operators)
```JavaScript
for (i = 1; i <= 20; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```
(< 2 mins. See if you can break that speed next time!)

####b. Movie Review (tests case)
```JavaScript
var getReview = function (movie) {
switch(movie) {
    case "Toy Story 2":
        return "Great story. Mean prospector.";
        break;
    case 'Finding Nemo':
        return "Cool animation, and funny turtles.";
        break;
    case 'The Lion King':
        return "Great songs.";
        break;
    default:
        return "I don't know!";
    }
}
```

##VIII. Objects (in depth)
How do we create an object? Like declaring a variable, or defining a function, we use var, followed by the name of the object and an equals sign. Each object then:

  * starts with {
  * has information inside
  * ends with };

Each piece of information we include in an object is known as a **property.** Think of a property like a category label that belongs to some object. When creating an object, each property has a name, followed by : and then the value of that property. For example, if we want Bob's object to show he is 34, we'd type in age: 34. QUESTION FOR MATT: ARE "PROPERTY" AND "KEY" SYNONYMOUS? OR DOES KEY REFER SPECIFICALLY TO THE LABEL (E.G. "AGE" IN AGE: 27)?
```JavaScript
var me = {
  name: "David",
  age: 27
};
```
###1. Accessing Properties
For the example above, you can access the property *age* for me by writing *me.age*. Further, you can store this as a new, global variable:
```JavaScript
var myName = me.name;
console.log(myName);
--> David
```
This is called **dot notation**. To access a property, write objectName.propertyName (e.g. me.age).

There's another method called **bracket notation**. Using the same example as above, you would write this as:
```JavaScript
var myName = me("name");
```

###2. Recap: Object Literal Notation vs. Object Constructor
```JavaScript
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;
```

##IX. Methods
Methods are similar to functions. We can think of properties as variables associated with an object. Similarly, a method is just like a *function* associated with an object. Here's an example:
```JavaScript
var david = {
  name: "David Resnick",
  age: 27,
  setAge: function(newAge) {
    david.age = newAge;
  }
}
```
In the example above, **setAge** is a *method* associated with the object **david.**

###1. **This** Keyword
Our setAge method works great for bob because it updates bob.age, but what if we want to use it for other people? We can make a method work for many objects using a new keyword, **this.**
*NOTE*: You might want to check out http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/ as a resource for **this.**

Remember when defining a method for an object, it's easy to reference other properties in that object: just use this.propertyName!

**When that method is called, this.propertyName will always refer to the most recent value of propertyName.** For example:
```JavaScript
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + this.job);
    }
};
james.sayJob();
// Hi, I work as a  programmer
james.job = "super programmer";
james.sayJob();
// Hi, I work as a super programmer
```
Any time you call this method, sayJob will return "Hi, I work as a [most recent job definition]" -- that is, the *job property* of the *most recent object* you called.


###2. Custom Constructors
Recall the object constructor:
```JavaScript
var tim = new Object();
```
With the Object constructor, we needed to add in our properties one-by-one:
```JavaScript
tim.age = 25;
tim.lastName = "McDuff"
```
But there's a way for us to set the properties for an object -- from the moment our object is created. So instead of using the Object constructor, which is empty and has no properties, we can make our own constructors which *do* have properties. Here's an example:
```JavaScript
function Person(name,age) {
  this.name = name;
  this.age = age;
}
```
We just created a constructor called Person. We can apply our new constructor in the same way we applied Object:
```JavaScript
var david = new Person("David",27);
console.log(david);
--> Person {name: "David", age: 27}
```
Why is this idea useful? If we wanted to created a bunch of objects -- all people -- with the same properties, we could add them very quickly, with minimal syntax. If we wanted to add Sally using the Person constructor, all we need to do is say:
```JavaScript
var sally = new Person("Sally",47);
```
###3. Constructors with Methods
In addition to setting properties, constructors can also define methods. This way, as soon as the object is created it will have its own methods as well.
```JavaScript
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
```
###4. Constructors in Sum
Constructors are a way to make objects with the keyword **new.** The most basic constructor is the Object constructor, which will make an object with no methods or properties.
```JavaScript
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}
// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");
console.log(rabbit1.describeMyself())
```
###5. Arrays of Objects
You should be able to figure out what's going on here:
```JavaScript
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}
// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
```
####a. Loop Through Arrays of Objects
In the example above, we could print the name of each family member in order:
```JavaScript
for (i = 0; i < family.length; i++) {
  console.log(family[i].name);
}
```
###6. Passing Objects to Functions
```JavaScript
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}
// We can make a function which takes persons as arguments. Let's check whether two persons have the same name.
var namesEqual = function(person1, person2) {
    if (person1.name === person2.name) {
      console.log("Hey, these two have the same name!");
    }
}
```
###7. Address Book Exercise


####a. Append Objects to Arrays
Objects, just like other types of data, can be put into arrays with a array[position] = object statement. To append something to the end of the array, you need to put it in the position one after the last item.

Suppose we have an array, contacts, which consists of two objects, Bob and Mary:
```JavaScript
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];
```
We can add a new contact to the list by using the following syntax:
```JavaScript
contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
};
```
Note that the object will be added without a variable name; however, we can refer to the new object by its position in the array.

####b. Exercise Results
```JavaScript
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	for (var i = 0; i < contacts.length; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].lastName === lastName) {
      printPerson(contacts[i]);
    }
  }
}

function add(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
    };
};
add("David","R","7","baloney");
list();
--> Bob Jones
--> Mary Johnson
--> David R
```
###8. Retrieving Property Values from Objects
####a. Method One: Dot Notation
```JavaScript
object.propertyName
```
####b. Method Two: Bracket Notation
```JavaScript
object["propertyName"]
```
Note that the examples in (a) and (b) above are equivalent. However, one advantage to using bracket notation is that you can use variables rather than strings. For example, we could define a *global* variable myProperty as *propertyName*, then call the property using the variable:
```JavaScript
var myProperty = "propertyName";
console.log(object[myProperty] === object["propertyName"]);
--> true
```

###9. Objects: Built-In Methods
####a. HasOwnProperty
Tests whether an object has a particular property.
```JavaScript
var myObj = {
  name: "David"
}
var console.log(myObj.hasOwnProperty('name'));
```
The hasOwnProperty method is particularly useful for conditionally adding properties to an object. For example:
```JavaScript
var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "Short Shorts";
}
console.log(suitcase.shorts);
```
###10. Listing Properties


What if you want to list the property *values*? First, remember that
object.property = object["property"] = "property value". And if we say ```JavaScript var x = "property" ```, then ```JavaScript dog[property] = "property value". ``` Let's look at an example:
```JavaScript
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
// write a for-in loop to print the value of nyc's properties
for (var property in nyc) {
    console.log(nyc[property]);
}
```
###11. Classes
When you make a constructor, you are in fact defining a new *class.*
```JavaScript
function Circle(radius) {
    this.radius = radius;
}
```
You can then use the class (in this case, the constructor) to create new objects of that class -- much in the same way that "String" is a class of JavaScript.
```JavaScript
var circleOne = new Circle(10);
```
The code above creates a new object, circleOne, of class Circle and defines its radius as 10.
####a. Functions and Class
You should know that classes by default only come with the properties you give them. Let's say we create a class Doctor using the constructor:
```JavaScript
function Doctor(name, specialty) {
  this.name = name;
  this.specialty = specialty;
}
```
We can add a new doctor, along with a function signYourName for the doctor:
```JavaScript
var nick = new Doctor("Nick", "Bad Doctor");
gary.signYourName = function() {
  console.log("ads" + this.name + "qiuqaQ%#RTrei");}
```
Now let's assume that every doctor's signature looks equally illegible (which is, in fact, true). However, if we add a new doctor, Rebecca, and ask her to sign her name, we get an error:
```JavaScript
var rebecca = new Doctor("Rebecca", "Epidemiologist")
console.log(rebecca.signYourName());
--> TypeError: rebecca.signYourName() is not a function
```
Rebecca the Epidemiologist doesn't know how to sign her name! When we made the function, we applied it only to Bad Doctor Nick. That's no good -- every doctor needs to write prescriptions somehow. Even bad ones. Enter **prototypes**.

####b. Prototypes
The initial definition of the class includes a set number of properties. We call this class along with its base properties the **prototype.**

Prototypes are important because they determine everything the class can do without modification. BUT we can add to this list using **.prototype**:
```JavaScript
var nick = new Doctor("Nick", "Bad Doctor");
Doctor.prototype.signYourName = function() {
  console.log("ads" + this.name + "qiuqaQ%#RTrei");
};
var rebecca = new Doctor("Rebecca", "Epidemiologist");
console.log(rebecca.signYourName());
--> adsRebeccaqiuqaQ%#RTrei
```
See how that worked? When you use prototype, you can defined a new method for the whole *class* even though you're working in an object.

####c. Inheritance
Prototypes are key to the concept of *inheritance*.

Using the doctor example above, let's say we want to create a class *within* Doctor called Epidemiologist. The new Epidemiologist class should have the same properties as Doctor, plus a few more. Here's the slow way to create Epidemiologist:
```JavaScript
function Epidemiologist(name,specialty) {
  this.name = name;
  this.specialty = specialty;
}
// Cardiologist should also have the method signYourName:
Epidemiologist.prototype.signYourName = function() {
  console.log("ads" + this.name + "qiuqaQ%#RTrei");
};
```
But that's slow. Epidemiologist is a member of the class Doctor; whenever we have an instance of "class X is a member of class Y", we should be using inheritance.

There are two steps to inheritance. First, you create the sub-class (in this case, Epidemiologist). Only this time, you can be more specific with the properties and arguments:
```JavaScript
function Epidemiologist(name) {
  this.name = name;
  this.specialty = "Epidemiologist";
}
```
The second step uses .prototype to assign the class Epidemiologist as an *instance* of the class Doctor:
```JavaScript
Epidemiologist.prototype = new Doctor();
```
What's the most amazing part? We never even need to add the signYourName method to Epidemiologist, because it was already added to the prototype for Doctor. Say we create a new Epidemiologist, funzoTheClown:
```JavaScript
var funzoTheClown = new Epidemiologist("Funzo the Clown");
console.log(funzoTheClown.signYourName());
--> adsFunzo the ClownqiuqaQ%#RTrei
```
###12. Private Variables in Objects
In the following example, the variable bankBalance cannot be accessed outside the Person class:
```JavaScript
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}
```
Note that bankBalance, rather than using *this* like a public variable, is defined using *var*. This makes bankBalance a  private variable.

You can access the private variable by adding a method *within the class* that returns the variable:
```JavaScript
this.myBankBalance = function () {
  return bankBalance;
}
```
Another example -- Create an object constructor called StaffMember which takes two parameters—name and discountPercent. And then have the (public) properties name and discountPercent equal the parameters.
```JavaScript
function StaffMember(name,discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
}
var me = new StaffMember("David",20);
```

### Summary Exercise: Cash Register
```JavaScript
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("David",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee) {
        this.total = this.total*((100-employee.discountPercent)/100);
    }  
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
```
## (Random: Need to Sort)
If you call isNaN on something, it checks to see if that thing is not a number. So:
```JavaScript
isNaN('berry'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42);  // => false
isNaN('42') // => false (JS converts the "string" 42 to a number, then evaluates. Weird, right?)
```

##The Box of Diciness
A list of concepts for which my understanding is **dicey**:
  * **this** -- See "Intro to Objects" and Section IX.1 above.
  * **key** -- Maybe I should look into placeholder variables more generally? This and key have that much in common.

NEXT STEP: Recreate your **own** examples for each concept.
