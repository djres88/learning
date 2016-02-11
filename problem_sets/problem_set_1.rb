# Write a function that given an array, returns another array with each of the numbers multiplied by two. Don't change the original array, make sure you construct a copy!
def array_times_two(arr)
  new_array = []
  arr.each { |num| new_array << num*2 }
  new_array
end

# Tests — these should all spit out true!
puts "\nArray times two:\n" + "*" * 15 + "\n"
puts array_times_two([1, 2, 3]) == [2, 4, 6]
puts array_times_two([0, -1, -2]) == [0, -2, -4]
dont_change_this = [3, 4, 5]
array_times_two(dont_change_this)
puts dont_change_this == [3, 4, 5]

# *********************************************

# Write a function that given an array, now CHANGES each of the numbers to be twice as big. This should mutate the original array!
def array_times_two!(arr) #note the ! to indicate what it does
  arr.each_with_index { |num, idx| arr[idx] = num*2 }
end

# Tests
puts "\nArray times two!:\n" + "*" * 15 + "\n"
puts array_times_two!([1, 2, 3]) == [2, 4, 6]
change_this = [6, 7, 8]
array_times_two!(change_this)
puts change_this == [12, 14, 16]

# *********************************************

# Write a function that given an array, returns another array of only the unique elements. I.e., return a version without duplicates.
def uniq(arr)
  new_array = []
  arr = arr.sort
  arr.each_with_index do |num, idx|
    new_array << num if num != arr[idx + 1]
  end
  new_array
end

##OR
def uniq_with_count(arr)
  result = []
  arr.each do |el|
    result << el unless result.include?(el)
  end
  result
end

# Tests
puts "\nUniq:\n" + "*" * 15 + "\n"
puts uniq([5, 5, 5, 5]) == [5]
puts uniq([1]) == [1]
puts uniq([1, 2, 1, 3, 3]) == [1, 2, 3]

# *********************************************

# A Slippery Number is a number is that has 3 as a factor or has 5 as a factor, but does *not* have both as factors. For example, 6 is a Slippery Number, but 30 is not. Write a function that given an N, returns an array of the first N Slippery numbers.

# You'll want to write a helper function that helps you determine which numbers are Slippery.

def slippery_numbers(n)
  num = 1
  result = []
  while result.length < n
    result << num if is_slippery?(num)
    num += 1
  end
  result
end

def is_slippery?(num)
  if (num % 3 == 0) && (num % 5 != 0)
    return true
  elsif (num % 3 != 0) && (num % 5 == 0)
    return true
  else
    return false
  end
end

#in class
def is_slippery_v2?(num)
  ((num % 5).zero? || (num % 3).zero?) && !(num % 15).zero?
end

# Tests
puts "\nSlippery numbers:\n" + "*" * 15 + "\n"
puts slippery_numbers(1) == [3]
puts slippery_numbers(2) == [3, 5]
puts slippery_numbers(7) == [3, 5, 6, 9, 10, 12, 18]

# *********************************************

# Write a function that finds whether any two elements in the array sum to 0. If it does, return true; else, return false.


def two_sum_to_zero?(arr)
  arr.each_with_index do |n1, idx1|
    arr.each_with_index do |n2, idx2|
      next if idx1 == idx2
      return true if (n1 + n2).zero?
    end
  end
  false
end

# Tests
puts "\nTwo sum to zero?:\n" + "*" * 15 + "\n"
puts two_sum_to_zero?([4, 2, 6]) == false
puts two_sum_to_zero?([-2, 5, 12, -3, 2]) == true
puts two_sum_to_zero?([0, 5]) == false

# *********************************************

# A magic number is a number whose digits, when added together, sum to 7. For example, the number 34 would be a magic number, because 3 + 4 = 7. Write a function that finds the first N many magic numbers.

# You'll want to write a helper function that checks whether a given number is a magic number.
# Reminder: you can convert an integer to a string using #to_s. You can convert a string back to an integer using #to_i.

def magic_numbers(count)
  num = 1
  result = []
  while result.length < count
    result << num if is_magic_number?(num)
    num += 1
  end
  result
end

def is_magic_number?(num)
  str = num.to_s
  sum = 0
  str.chars.each do |digit|
    sum += digit.to_i
  end
  sum == 7
end

# Tests
puts "\nMagic numbers:\n" + "*" * 15 + "\n"
puts magic_numbers(1) == [7]
puts magic_numbers(3) == [7, 16, 25]
puts magic_numbers(20) == [7, 16, 25, 34, 43, 52, 61, 70, 106, 115, 124, 133, 142, 151, 160, 205, 214, 223, 232, 241]
