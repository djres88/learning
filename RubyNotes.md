(From codecademy's ruby course)


##Control Flow
Covers if, unless, and operators (==, !, <, >, and booleans)
###Combining Boolean Operators
You can combine boolean operators in your expressions. Combinations like
```ruby
(x && (y || w)) && z
```
are not only legal expressions, but are extremely useful tools for your programs.

These expression may take some getting used to, but you can always use parentheses to control the order of evaluation. Expressions in parentheses are always evaluated before anything outside parentheses.

**Instructions**
Last one! Set each variable to true or false depending on what value you expect the expression to return.
```ruby
# boolean_1 = (3 < 4 || false) && (false || true)
boolean_1 = true

# boolean_2 = !true && (!true || 100 != 5**2)
boolean_2 = false

# boolean_3 = true || !(true || false)
boolean_3 = true
```

##**EXERCISE: THIS MEANTH WAR**
Setting Up the 'If' Branch, Part 1
All right! Time to add in a little control flow.

For the if half of our branch, we want to check whether the user's input contains an "s".

if string_to_check.include? "substring"
We can do that using Ruby's .include? method, which evaluates to true if it finds what it's looking for and false otherwise.

*(As a general rule, Ruby methods that end with ? evaluate to the boolean values true or false.)*

**Instructions**
We want to check user_input for the substring "s".

Write an if statement in the editor. It should check to see if user_input includes "s". For now, print a string of your choice to the console if it finds "s".

##Looping & Iterators
###The 'For' Loop
Sometimes you do know how many times you'll be looping, however, and when that's the case, you'll want to use a for loop.

**Inclusive and Exclusive Ranges**
You saw a bit of new syntax in the previous exercise: for num in 1...10. What this says to Ruby is: "For the variable num in the range 1 to 10, do the following." The following was to print "#{num}", so as num took on the values of 1 to 9, one at a time, those values were printed to the console.

The reason Ruby counted to 9 and not 10 was because we used three dots in the range; this tells Ruby to exclude the final number in the count: for num in 1...10 means "go up to but don't include 10." If we use two dots, this tells Ruby to include the highest number in the range.
```ruby
for num in 1..20
  puts num
end
```

###Loop Method
