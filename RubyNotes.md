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

###Iterators and Blocks
####Loop Method
So far we've learned one way to repeat an action in Ruby: using loops. As is often the case in Ruby, however, there's more than one way to accomplish a given task. In this case, it's also possible to repeat an action using an iterator.

An iterator is just a Ruby method that repeatedly invokes a block of code. The code block is just the bit that contains the instructions to be repeated, and those instructions can be just about anything you like!

The simplest iterator is the loop method. You can create a basic (but infinite!) loop by simply typing
```ruby
loop { print "Hello, world!" }
```
*In Ruby, curly braces ({}) are generally interchangeable with the keywords do (to open the block) and end (to close it). Knowing this, we can write a smarter loop than the one above:*
```ruby
i = 0
loop do
  i += 1
  print "#{i}"
  break if i > 5
end
```
**KEY POINT: `do` and `end` are basically the same as brackets**

####Next Method
The next keyword can be used to skip over certain steps in the loop. For instance, if we don't want to print out the even numbers, we can write:
```ruby
for i in 1..5
  next if i % 2 == 0
  print i
end
```

####Each Method
A more useful iterator is the .each method, which can apply an expression to each element of an object, one at a time. The syntax looks like this:

```ruby
object.each { |item| # Do something }
```
You can also use the do keyword instead of {}:
```ruby
object.each do |item| # Do something
```
The variable name between | | can be anything you like: it's just a placeholder for each element of the object you're using `.each` on.

#####Example:
```ruby
nums = [1,2,3,4,5]

nums.each do |num|
  print num*2
end
```

####Times Method
The .times Iterator
The .times method is like a super compact for loop: it can perform a task on each item in an object a specified number of times.

For example, if we wanted to print out "Chunky bacon!" ten times, we might type
```ruby
10.times { print "Chunky bacon!" }
#Chunky bacon!Chunky bacon!Chunky bacon!Chunky bacon!Chunky bacon!Chunky bacon!Chunky bacon!Chunky bacon!Chunky bacon!Chunky bacon!10
```
We don't know why we would type that, but we could.

####EX: Until vs While vs For -- Same loop three ways
```ruby
#Until
i = 1
until i == 51 do
    print i
    i += 1
end
#While
i = 1
while i <= 51 do
    print i
    i += 1
end
#For
for i in 1..50
    print i
end
```

####EX: Loop vs Times
```ruby
#loop
i = 0
loop do
  i += 1
  print "Ruby!"
  break if i == 30
end
#Times
30.times do
  print "Ruby!"
end
```

####Exercise: Redacted
```ruby
puts "Enter your text"
text = gets.chomp

puts "Enter the word you'd like to redact"
redact = gets.chomp

words = text.split(" ")

words.each do |word|
    if word == redact
        print "REDACTED"
    else
        print word + " "
    end
end
```

##Data Structures

###Arrays
(Most of this is review/same as JS... here are the new bits)
####Array of Arrays (Multidimensional Arrays)
Arrays of arrays are called multidimensional arrays, since the act of adding more arrays expands the array out of its string-like shape. For instance, the array in the editor is a two-dimensional array.
```ruby
multi_d_array = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
multi_d_array.each { |x| puts "#{x}\n" }
```

###Hashes
We know that arrays are indexed with numbers that start with 0 and go up to the array's length minus one. (Think about it: an array with four elements has the indices 0, 1, 2, and 3.)

But what if we want to use numeric indices that don't go in order from 0 to the end of the array? What if we don't want to use numbers as indices at all? We'll need a new array structure called a hash.

**Hashes are sort of like JavaScript objects or Python dictionaries.** The syntax:
```ruby
hash = {
  key1 => value1,
  key2 => value2,
  key3 => value3
}
```
EXAMPLE:
```ruby
my_hash = { "name" => "Eric",
  "age" => 26,
  "hungry?" => true
}

puts my_hash["name"]
puts my_hash["age"]
puts my_hash["hungry?"]
```

Side note: If you have a hash with a default value, and you try to access a non-existent key, you get that default value.

####Hash.new
What we just showed you was *hash literal notation.* We call it that because you literally describe what you want in the hash: you give it a name and you set it equal to a bunch of key => value pairs inside curly braces.

You can also create a hash using Hash.new, like so: `my_hash = Hash.new`. Note that Hash **must** be capitalized.

Setting a variable equal to Hash.new creates a new, empty hash; it's the same as setting the variable equal to empty curly braces (`{}`).

You can then add new elements to the hash:
```ruby
pets = Hash.new
pets["Beans"] = "fish"
pets["Otis"] = "iguana"
```

####Iteration
```ruby
friends = ["Milhouse", "Ralph", "Nelson", "Otto"]

family = { "Homer" => "dad",
  "Marge" => "mom",
  "Lisa" => "sister",
  "Maggie" => "sister",
  "Abe" => "grandpa",
  "Santa's Little Helper" => "dog"
}

friends.each { |x| puts "#{x}" }
family.each { |x, y| puts "#{x}: #{y}" }
```

#####Iterate over multidimensional array
```ruby
s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]

s.each do |sub_array|
    sub_array.each do |element|
        puts element
    end
end
```

#####Iterate over hashes
When iterating over hashes, we need two placeholder variables to represent each key/value pair.
```ruby
restaurant_menu = {
  "noodles" => 4,
  "soup" => 3,
  "salad" => 2
}

restaurant_menu.each do |item, price|
  puts "#{item}: #{price}"
end
```

We can also just print the value (rather than the key):
```ruby
lunch_order = {
  "Ryan" => "wonton soup",
  "Eric" => "hamburger",
  "Jimmy" => "sandwich",
  "Sasha" => "salad",
  "Cole" => "taco"
}

lunch_order.each { |person, order|
    puts order
}
```

####Exercies: HISTOGRAM
```ruby
puts "Text please: "
text = gets.chomp

words = text.split(" ")
frequencies = Hash.new(0)
words.each { |word| frequencies[word] += 1 }
frequencies = frequencies.sort_by {|a, b| b }
frequencies.reverse!
frequencies.each { |word, frequency| puts word + " " + frequency.to_s }
```




















.
