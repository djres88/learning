
# Write a function that takes in a number and sums all the numbers up to that number
def sum_to(n)
  sum = 0
  idx = 0
  while idx <= n
    sum += idx
    idx += 1
  end
  sum
end

def sum_to_in_class(n)
  (1..n).each {|num| num += num}
  num
end

# Test - these should all print out true!
puts "\nSum To:\n" + "*" * 15 + "\n"
puts sum_to(5) == 15
puts sum_to(3) == 6
puts sum_to(1) == 1
puts sum_to(0) == 0

# *********************************************

# Write a function that takes in an amount of minutes and returns a time string formatted HH:MM
def time_conversion(mins)
  minutes = mins % 60
  hours = mins/60 #floor method?
  if hours < 10
    hours = "0" + hours.to_s
  end
  if minutes < 10
    minutes = "0" + minutes.to_s
  end
  hours.to_s + ":" + minutes.to_s
end

def time_conversion_in_class(mins)
  minutes = mins % 60
  hours = mins/60 #floor method?
  hours_string = hours >= 10 ? hours.to_s : "0#{hours}"
  minutes_minutes = minutes >= 10 ? minutes.to_s : "0#{minutes}"

  "#{hours_string}:#{minutes_string}"
end

# Test - these should all print true!
puts "\nTime Conversion:\n" + "*" * 15 + "\n"
puts time_conversion(30) == "00:30"
puts time_conversion(60) == "01:00"
puts time_conversion(90) == "01:30"
puts time_conversion(120) == "02:00"
puts time_conversion(10) == "00:10"
puts time_conversion(5) == "00:05"
puts time_conversion(0) == "00:00"

# *********************************************
# Write a function that takes an array of pairs and returns the pair with the greatest sum
def largest_pair(pairs)
  max = nil
  max_array = nil

  pairs.each do |arr|
    sum = arr[0] + arr[1]
    if max.nil? || sum > max
      max = sum
      max_array = arr
    end
  end
  max_array
end

def largest_pair_in_class(pairs)
  largest_pair = pairs.first
  largest_sum = largest_pair.first  + largest_pair.last

  pairs.each do |pair|
    sum = pair.first + pair.last
    if sum > largest_sum
      largets_pair = pair
      largest_sum = sum
    end
  end
  largets_pair
end
#Tests - Get all these to print true
puts "\nLargest Pair:\n" + "*" * 15 + "\n"
puts largest_pair([[1,0]]) == [1,0]
puts largest_pair([[1,0],[1,1],[1,2]]) == [1,2]
puts largest_pair([[-4,0],[-2,-1],[-3,2]]) == [-3,2]


# *********************************************

# Write a function that returns a phrase with each word (separated by spaces) capitalized.
def capitalize_each_word(phrase)
  words = phrase.split
  capitalized_words = words.map do |word|
    word[0] = word[0].upcase
    word ##?
  end
  capitalized_words.join(" ")
end

#Get these to true!!
puts "\nCapitalize:\n" + "*" * 15 + "\n"
puts capitalize_each_word("abc") == "Abc"
puts capitalize_each_word("lets go dubs") == "Lets Go Dubs"
puts capitalize_each_word("CODE IS LIFE") == "CODE IS LIFE"
dont_change_this = "do not mutate me"
capitalize_each_word(dont_change_this)
puts dont_change_this == "do not mutate me"

# *********************************************

# Write a boolean function that returns true if an array of numbers has any multiples of 3.
def has_multiple_of_three?(nums)
  nums.any? { |num| return true if num % 3 == 0 }
end

def has_multiple_of_three_in_class?(nums)
  nums.any? { |num| num % 3 == 0 }
end

#Tests - More trues
puts "\nHas multiples of three:\n" + "*" * 15 + "\n"
puts has_multiple_of_three?([1]) == false
puts has_multiple_of_three?([3]) == true
puts has_multiple_of_three?([1,2,4,5,7,8]) == false
puts has_multiple_of_three?([1,2,4,5,6,7,12]) == true

# *********************************************

#If you didn't use enumerable any? in has_multiple_of_three? write is again using any?

# *********************************************

# Write a function that take an array of numbers and returns a hash of the number of even numbers and of odd numbers.

def evens_and_odds(nums)
  hash = {
    'even' => 0,
    'odd' => 0
  }

  nums.each do |num|
    if num % 2 == 0
      hash['even'] += 1
    else
      hash['odd'] += 1
    end
  end
  hash
end

#Test - Get these all true, look at the format of the return value
puts "\nEvens and odds:\n" + "*" * 15 + "\n"
puts evens_and_odds([1,3]) == {'even' => 0, 'odd' => 2}
puts evens_and_odds([2,4]) == {'even' => 2, 'odd' => 0}
puts evens_and_odds([]) == {'even' => 0, 'odd' => 0}
puts evens_and_odds([1,2,3]) == {'even' => 1, 'odd' => 2}

# *********************************************

# Write a function that takes in a word and returns the counts of each letter in that word.

def letter_counts(word)
  character_count = Hash.new(0) #Why hash.new and not {}
  word.each_char do |char, idx|
    character_count[char] += 1
  end
  character_count
end

# Tests must all print true
puts "\nLetter Counts:\n" + "*" * 15 + "\n"
puts letter_counts("hi") == { 'h' => 1, 'i' => 1 }
puts letter_counts("hello") == { 'h' => 1, 'e' => 1 , 'l' => 2, 'o' => 1}

# *********************************************

# Take a moment and refactor your previous code to make it look sexy and use good coding style!

# *********************************************

# Write a boolean function palindrome? which takes in a word and returns true if it is palindrome.

def palindrome?(str)
  first = 0
  last = str.length - 1
  while first <= last
    unless str[first] == str[last]
      return false
    end
    first += 1
    last -= 1
  end
  true
end

def palindrome_in_class(str)
  str == str.reverse
end

#Tests
puts "\nPalindrome:\n" + "*" * 15 + "\n"
puts palindrome?("a") == true
puts palindrome?("aa") == true
puts palindrome?("ab") == false
puts palindrome?("racecar") == true
puts palindrome?("coder") == false

# *********************************************

# Write a function that will reverse the digits of a number.
def reverse_digits(num)
  array_of_num_strings = num.to_s.chars
  idx = array_of_num_strings.length - 1
  result = []

  while idx >= 0
    result << array_of_num_strings[idx]
    idx -= 1
  end
  result.join("").to_i
end

def reverse_digits_in_class(num)
  num.to_s.reverse.to_i
end

#Tests
puts "\nReverse Digits:\n" + "*" * 15 + "\n"
puts reverse_digits(1) == 1
puts reverse_digits(12) == 21
puts reverse_digits(1738) == 8371

# *********************************************

# Write a function that returns the longest word in a sentence
def longest_word(phrase)
  words = phrase.split
  longest = words.first

  words.each do |word|
    if word.length > longest.length
      longest = word
    end
  end
  longest
end

# Tests - these should all print out true!
puts "\nLongest word:\n" + "*" * 15 + "\n"
puts longest_word("lets go warriors") == ("warriors")
puts longest_word("warriors are the best") == ("warriors")
phrase = "go steph go"
longest_word(phrase)
puts phrase == "go steph go"

# *********************************************

# Write a method that will take a list of names and return a hash of first initials and the number of times they appear.
def count_initials(names)
  initials = Hash.new(0)

  names.each do |name|
    initials[name[0]] += 1
  end

  initials
end

#Tests
puts "\nCount Initials:\n" + "*" * 15 + "\n"
dubs = ["Steph", "Harrison", "Klay", "Andrew", "Andre", "Draymond", "Shaun"]
puts count_initials(dubs) == { "S" => 2, "H" => 1, "K" => 1, "D" => 1, "A" => 2 }

# *********************************************

# Write a function that takes an array of integers and uses each to calcuate their squares, returning them as an array.

# *********************************************

def compute_squares(array)
  array.map { |num| num*num }
end

#Tests
puts "\ncompute squares"
puts compute_squares([]) == []
puts compute_squares([9]) == [81]
puts compute_squares([1, 2, 3, 4]) == [1, 4, 9, 16]
