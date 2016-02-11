#NOTES
def pikafy(arr)
  # result = []
  # arr.each do |word|
  #   result << word + "achu"
  # end
  # result

  arr.map do |word|
    word + "achu"
  end
  #We don't need a return statement.
end

#-----
#EXERCISES
# Print every number from 1 to 30 using each and a range.
(1..30).each { |num| p num}

# Write a function called triplify(arr) which given an array of integers, returns a new array with all of the values multiplied by three.
nums = [0,1,2,3,4,5]
no_zeros = [1,2,3]
odds = [1,3,5]

def triplify(arr)
  arr.map { |num| num * 3 }
end

puts triplify(nums)

# Write a boolean function called zeroes?(arr) that checks whether an array of integers contains at least one 0.
# First implement this with #each, then use a more advanced enumerable boolean method.

def zeroes?(arr)
  arr.each do |num|
    return true if num == 0
  end
  false
end

puts zeroes?(nums)
puts zeroes?(no_zeros)

def zeroes_using_any?(arr)
  arr.any? { |num| num == 0}
end

puts zeroes?(nums)
puts zeroes?(no_zeros)

# Write a function called all_odd?(arr) that returns whether all of the integers in an array are odd.

def all_odd?(arr)
  arr.all? { |num| num.odd? }
end

puts all_odd?(nums)
puts all_odd?(odds)

def squares(arr)
  arr.map { |num| num * num }
end

puts squares(nums)
puts squares(no_zeros)
puts squares(odds)
