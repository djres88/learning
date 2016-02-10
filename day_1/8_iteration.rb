#EXERCISES 8 - ITERATION
#EACH
nums = [10, 11, 12, 13, 14]
string = "this is a string"
# Write a function called vowels(str) that returns an array of every vowel in the string.
# Use the String#chars method, which returns an array of characters. Then use an each over the chars.
def vowels(str)
  arr_of_characters = str.chars
  arr_of_vowels = [];
  arr_of_characters.each do |char|
    arr_of_vowels.push(char) if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" )
  end
  arr_of_vowels
end

# Write a function called odd_elems(arr) that prints out every other element (those with odd indices). Use each_with_index.
def odd_elems(arr)
  arr.each_with_index { |el, i| print el if i % 2 != 0 }
end

# Write a function called zip_with_indices(arr) that given an array, converts each element into a tuple with its index.
# E.g., zip_with_indices([3, 20, 8]) == [[3, 0], [20, 1], [8, 2]]

def zip_with_indices(arr)
  arr.each_with_index { |el, i| arr[i] = [el, i] }
end

puts vowels(string)
puts odd_elems(nums)
puts zip_with_indices(array)
