# RegExp Object
A regular expression describes a pattern of characters.

Regular expressions are commonly used on text. With them, we can perform functions such as pattern-matching (`.match`) and "search-and-replace" (`.replace`) functions on text.

## Syntax
`/pattern/modifiers;`

## Example
```javascript
var string = "I just wanna dance!";
var x = /an/i;
console.log(x); // an, an
```
The expression `/an/i` matches all instances of `an` (the pattern). The modifier `i` specifies that the search will be case insensitive.

##Modifiers
Modifier | Description
---------|--------------
i	       | Perform case-insensitive matching
g	       | Perform a global match (find all matches rather than stopping after the first match)
m	       | Perform multiline matching (???)

##Brackets
Brackets are used to find a range of characters:

Expression	| Description
-------|-----------------
[abc]	 | Find any character between the brackets
[^abc] | Find any character NOT between the brackets
[0-9]	 | Find any digit between the brackets
[^0-9] | Find any digit NOT between the brackets
(x|y)  | Find any of the alternatives specified
