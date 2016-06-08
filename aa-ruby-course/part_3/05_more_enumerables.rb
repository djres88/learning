puts("*" * 30 + "Intro Problems" + "*" * 30)
def find_words_starting_with_s(sentence)
  words = sentence.split
  starts_with_s =  []

  words.each do |word|
    starts_with_s << word if word[0].downcase == "s"
  end
  starts_with_s
end

#with select
def find_words_starting_with_s(sentence)
  words = sentence.split
  words.select { |word| word[0].downcase == "s" }
end

#with reject
def find_words_starting_with_s(sentence)
  words = sentence.split
  words.reject { |word| word[0].downcase != "s" }
end

def count_words_starting_with_s(sentence)
  words = sentence.split(' ')
  words.count do |word|
    word[0] == 's'
  end
end

puts count_words_starting_with_s("start no don't start okay start wait no")

#inject does the same thing and is a little more common, but you know reduce from JS
def sum_a(arr)
  arr.reduce(0) { |accum, el| accum + el }
  #0 is the initial val, which is passed as an arg to reduced. The accum is the value returned by the last block.
end

puts sum_a([1,2,3,4,5])

def largest_digit_sum(num_arr)
  num_arr.max_by do |num|
    num.to_s.chars.inject(0) { |accum, digit| accum + digit.to_i }
  end
end

p largest_digit_sum([1,2,3,33,44,91,88])

def is_prime?(num)
  (2...num).none? { |factor| num % factor == 0}
end

puts("*" * 30 + "Exercises" + "*" * 30)
# Exercises:
#
# Use enumerable methods to add up all the numbers that are not equal to 2 in an array. Do NOT modify the original array.

def sum_not_two(arr)
  arr.reduce(0) { |accum, num| num != 2 ? accum += num : accum }
end

p sum_not_two([1,2,3,4,2,5])

# Use the #max_by method to find the longest string in an array of strings.
def longest_string(arr)
  arr.max_by { |word| word.length }
end

puts longest_string(["the", "longest", "string", "is", "adsfknasdlkfns"])


# Write an is_prime? function in one line using enumerable methods.
def is_prime?(num)
  (2...num).none? { |div| num % div == 0 }
end

p is_prime?(7)
p is_prime?(10)

# Write a one line function that lists all primes less than or equal to the argument passed in. Use enumerable methods in combination with your is_prime? function.
def primes_to_n(n)
  (2..n).select { |num| is_prime?(num) }
end

p primes_to_n(40)
