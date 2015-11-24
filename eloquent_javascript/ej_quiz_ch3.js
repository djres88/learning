/*
CHPT 3 QUIZ: FUNCTIONS

(1) Write a function min that takes two arguments and returns their minimum:
*/
function min(x,y) {
  if (x > y)
    return y;
  else if (y > x)
    return x;
  else (y = x)
  	return "x = y";
}

/*

(2) We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 (a) Zero is even.
 (b) One is odd.
 (c) For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/
function isEven(number) {
  // fix negative numbers problem with termination condition:
  if (number < 0)
    number *= -1;
  if (number == 0)
    return true;
  // Ask Matt: Let's talk out the logical diff between if and else if so that I'm sure I get it.
  if (number == 1)
    return false;
  else
    return isEven(number-2);
}

/*
QUESTION 3(part a)
You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.
*/
// NOTE: QUESTION for MATT: Is there a way to make sure the function passes the right value type as an argument? Why does the function need to be expressed as, for example, countBs("Big"), with the value in quotes to indicate it's a string?
function countBs(string) {
    numberB = 0;
  for (i = 0; i < string.length; i++)
    if (string.charAt(i) == "B")
      numberB += 1;
  return numberB;
}
/*
QUESTION 3(part b)  */
function countChar(string, char) {
  numberChar = 0;
  for (i = 0; i < string.length; i++)
    if (string.charAt(i) == char)
      numberChar += 1;
  return numberChar;
}
