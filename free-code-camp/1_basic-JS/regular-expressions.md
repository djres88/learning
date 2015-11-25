#38. Sift through Text with Regular Expressions
Regular expressions are used to find certain words or patterns inside of strings. Regular expressions are usually surrounded by `/` symbols.

For example, if we wanted to find the number of times the word "the" occurred in the string `The dog chased the cat`, we could use the following regular expression: `/the+/gi`

Let's break this down a bit:

* `the` is the pattern we want to match.
* `+` means we want to find one or more occurrences of this pattern.
* `g` means we want to search the entire string for this pattern.
* `i` means we want to ignore the case (uppercase or lowercase) when searching for the pattern.

Another example (http://www.w3schools.com/jsref/jsref_match.asp):
```javascript
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/gi);
console.log(res); // ain, AIN, ain, ain
```

#39. Find Numbers with Regular Expressions
We can use special selectors in Regular Expressions to select a particular type of value. One such selector is the digit selector \d which is used to grab the numbers in a string.

It is used like this: `/\d+/g`

#40. Find White Space with Regular Expressions
We can also use selectors like\s to find spaces in a string.

It is used like this: `/\s+/g`

#41. Invert Regular Expression Matches with JavaScript
Use `/\S/gi;` to match everything that isn't a space in the string.

You can invert any match by using the uppercase version of the selector — for example, \S versus \s for example.
