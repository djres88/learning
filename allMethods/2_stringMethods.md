#JavaScript Strings
http://www.w3schools.com/jsref/jsref_obj_string.asp

##String Properties
Property | Description
---------|-----------
constructor	| Returns the string's constructor function
length	| Returns the length of a string
prototype	| Allows you to add properties and methods to an object

###Prototype
Use the prototype property to add a new property to all objects of a given type:
```JavaScript
function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
}
employee.prototype.salary = 2000;

var fred = new employee("Fred Flintstone", "Caveman", 1970);

```
The value of fred.salary will be `2000`.

##String Methods
Method	 | Description
---------|-------------
charAt() | Returns the character at the specified index (position)
charCodeAt()	| Returns the Unicode of the character at the specified index
concat()	| Joins two or more strings, and returns a new joined strings
fromCharCode()	| Converts Unicode values to characters
indexOf()	| Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	| Returns the position of the last found occurrence of a specified value in a string
localeCompare()	| Compares two strings in the current locale
match()	| Searches a string for a match against a regular expression, and returns the matches
replace()	| Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	| Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	| Extracts a part of a string and returns a new string
split()	| Splits a string into an array of substrings
substr() | 	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring() | 	Extracts the characters from a string, between two specified indices
toLocaleLowerCase() | Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	| Converts a string to uppercase letters, according to the host's locale
toLowerCase()	| Converts a string to lowercase letters
toString()	| Returns the value of a String object
toUpperCase()	| Converts a string to uppercase letters
trim()	|  Removes whitespace from both ends of a string
valueOf()	| Returns the primitive value of a String object
