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

#UNIT 5: Methods, Blocks & Sorting
A method is a reusable section of code written to perform a specific task in a program. We write code in methods because:
1. It's easier to fix bugs
2. By assigning specific tasks to separate methods (an idea computer scientists call separation of concerns), you make your program less redundant and your code more reusable.
3. When we learn more about objects, you'll find out there are a lot of interesting things we can do with methods in Ruby.

##Method Syntax
Methods are defined using the keyword def (short for "define"). Methods include three parts:
1. **Header** includes the def keyword, the name of the method, and any arguments the method takes
2. **Body** is the code block that describes the procedures the method carries out. The body is indented two spaces by convention
3. The method ends with an `end` statement

##Parameters & Arguments
###**Splat!**
Your methods not only don't know what arguments they're going to get ahead of time, but occasionally, they don't even know how many arguments there will be. Let's say you have a method, friend, that puts the argument it receives from the user. It might look something like this:
```ruby
def friend(name)
  puts "My friend is " + name + "."
end
```
This is great for just one friend, but what if you want to print out the user's friends, without knowing how many friend names the user will put in ahead of time?

The solution: **splat arguments.** Splat arguments are arguments preceded by a \*, which signals to Ruby: "Hey Ruby, I don't know how many arguments there are about to be, but it could be more than one."
```ruby
def what_up(greeting, *bros)
  bros.each { |bro| puts "#{greeting}, #{bro}!" }
end

what_up("What up", "Justin", "Ben", "Kevin Sorbo")
```

##Blocks
###Blocks Are Like Nameless Methods
Most methods that you've worked with have defined names that either you or someone else gave them (i.e. [array].sort(), "string".downcase(), and so on). You can think of blocks as a way of creating methods that don't have a name. (These are similar to anonymous functions in JavaScript or lambdas in Python.)

Blocks can be defined with either the keywords `do` and `end` or with curly braces (`{}`).

###Using Code Blocks
A method can take a block as a parameter. That's what .each has been doing this whole time: taking a block as a parameter and doing stuff with it! You just didn't notice because we didn't use the optional parentheses. We are sneaky.

Passing a block to a method is a great way of abstracting certain tasks from the method and defining those tasks when we call the method. Abstraction is an important idea in computer science, and you can think of it as meaning "making something simpler." Imagine if when you wanted to house hunt, you had to say, "Honey, let's go look at configurations of concrete, plywood, and vinyl siding." That'd be crazy! Just like saying "house" simplifies listing its components, using a block to define the task you want the method (like .each) to do simplifies the task at hand.

###Sorting with Blocks
```ruby
my_array = [3, 4, 8, 7, 1, 6, 5, 9, 2]
my_array.sort!
# [1, 2, 3, 4, 5, 6, 7, 8, 9].
```
The sort method assumes by default that you want to sort in ascending order, but it accepts a block as an optional argument that allows you, the programmer, to specify how two items should be compared.
```ruby
books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]
books.sort! { |book1, book2| book2 <=> book1 }
```

###The Combined Comparison Operator `<=>`
The combined comparison operator (`<=>`) returns 0 if the first operand (item to be compared) equals the second, 1 if first operand is greater than the second, and -1 if the first operand is less than the second.

###Exercise
You can modify a method to have it do more. This alphabetize method can go A-Z or Z-A, depending on whether the second argument is true:
```ruby
def alphabetize(arr, rev=false)
  if rev
    arr.sort { |item1, item2| item2 <=> item1 }
  else
    arr.sort { |item1, item2| item1 <=> item2 }
  end
end

books = ["Heart of Darkness", "Code Complete", "The Lorax", "The Prophet", "Absalom, Absalom!"]

puts "A-Z: #{alphabetize(books)}"
puts "Z-A: #{alphabetize(books, true)}"
```

#Unit 6: Hashes and Symbols
##Nil
What happens if you try to access a key that doesn't exist, though?

In many languages, you'll get an error of some kind. Not so in Ruby: you'll instead get the special value nil.

Along with false, nil is one of two non-true values in Ruby. (Every other object is regarded as "truthy," meaning that if you were to type if 2 or if "bacon", the code in that if statement would be run.)

You don't have to settle for nil as a default value, however. If you create your hash using the Hash.new syntax, you can specify a default like so:
```ruby
my_hash = Hash.new("Trady Blix")
```
Now if you try to access a nonexistent key in my_hash, you'll get "Trady Blix" as a result.

##Symbols: an intro
We can certainly use strings as Ruby hash keys; as we've seen, there's always more than one way to do something in Ruby. However, the Rubyist's approach would be to use symbols.
```ruby
menagerie = { :foxes => 2,
  :giraffe => 1,
  :weezards => 17,
  :elves => 1,
  :canaries => 4,
  :ham => 1
}
```
You can think of a Ruby symbol as a sort of name. It's important to remember that symbols *aren't* strings. Above and beyond the different syntax, there's a key behavior of symbols that makes them different from strings: while there can be multiple different strings that all have the same value, there's only one copy of any particular symbol at a given time.

The .object_id method gets the ID of an object -- it's how Ruby knows whether two objects are the exact same object. Test the following code to see that the two "strings" are actually different objects, whereas the :symbol is the same object listed twice:
```ruby
puts "string".object_id
puts "string".object_id

puts :symbol.object_id
puts :symbol.object_id
```

##What are Symbols Used For?
Symbols pop up in a lot of places in Ruby, but they're primarily used either as hash keys or for referencing method names. (We'll see how symbols can reference methods in a later lesson.)

Symbols make good hash keys for a few reasons:

1. They're immutable, meaning they can't be changed once they're created;
Only one copy of any symbol exists at a given time, so they save memory;
Symbol-as-keys are faster than strings-as-keys because of the above two reasons.

##Converting Between Symbols and Strings
Converting between strings and symbols is a snap.
```ruby
:sasquatch.to_s
# ==> "sasquatch"

"sasquatch".to_sym
# ==> :sasquatch

#EXAMPLE:
strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]
symbols = []

strings.each do |s|
    s = s.to_sym
    symbols.push(s)
end
```
Can also use `.intern` (same as to_sym):
```ruby
strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

# Add your code below!
symbols = []
strings.each do |s|
    symbols.push(s.intern)
end
```

##End of the Hash Rocket...
Ruby 1.9 switched from => to : — now it's same as JS. And you put the colon at the end, so it's really the same:
```ruby
movies = {
    Zoolander: "2001",
    Revenant: "2016"
}
```

##Select
EXAMPLE (akin to JS's filter)
```ruby
grades = { alice: 100,
  bob: 92,
  chris: 95,
  dave: 97
}

grades.select {|name, grade| grade < 97}
# ==> {:bob=>92, :chris=>95}

grades.select { |k, v| k == :alice }
# ==> {:alice=>100}
```

##each_key and each_value
Can we iterate over just keys or just values? This is Ruby. Of course we can.

Ruby includes two hash methods, `.each_key` and `.each_value`, that do exactly what you'd expect:
```ruby
my_hash = { one: 1, two: 2, three: 3 }

my_hash.each_key { |k| print k, " " }
# ==> one two three

my_hash.each_value { |v| print v, " " }
# ==> 1 2 3
```

#UNIT 7
##Simpler `if`
You can do this:
```ruby
puts "It's true!" if 5 < 7
```
but not this:
```ruby
if 5 < 7 puts "It's true!"
```
It's also important to note that you don't need an end when you write your if statement all on one line.

##Simpler `unless`
```ruby
puts "go" unless 5 > 10
```

##Ternary
SYNTAX: `boolean ? Do this if true: Do this if false`
```ruby
num1 = 7
num2 = 10
puts num1 < num2 ? "#{num1} is less than #{num2}" : "#{num2} is less than #{num1}"
```

##Case/When
```ruby
puts "Hello there!"
greeting = gets.chomp

# Add your case statement below!
case greeting
    when "English" then puts "Hello!"
    when "French" then puts "Bonjour!"
    when "German" then puts "Guten Tag!"
    when "Finnish" then puts "Haloo!"
    else "I don't know that language!"
end
```

##Conditional Assignment (||=)
```ruby
favorite_book = nil
puts favorite_book
#
favorite_book ||= "Cat's Cradle"
puts favorite_book
#Cat's Cradle
favorite_book ||= "Why's (Poignant) Guide to Ruby"
puts favorite_book
#Cat's Cradle
favorite_book = "Why's (Poignant) Guide to Ruby"
puts favorite_book
#Why's (Poignant) Guide to Ruby
```

##Implicit Return
For instance, if you don't tell a JavaScript function exactly what to return, it'll return undefined. For Python, the default return value is None. But for Ruby, it's something different: Ruby's methods will return the result of the last evaluated expression.

The following functions *both* return a + b:
```ruby
def add(a,b)
  return a + b
end
#Now without the return statement:
def add(a,b)
  a + b
end
```

##Short-Circuit Evaluation






.
