# Exercises:
#
# Write a function called lotrify(str) translates passages from The Hobbit into the Lord of the Rings. It should replace all occurrences of the string "Bilbo" with the string "Frodo".
def lotrify(str)
  str.gsub("Bilbo", "Frodo")
end

p lotrify("Bilbo hey Bilbo")


# Write an is_palindrome? function that checks to see if the string reads the same backwards as it does forwards. It should not count spaces or be case sensitive.
def is_palindrome?(str)
  str == str.reverse
end

p is_palindrome?("ada")
p is_palindrome?("ad")

# Write a function called longest_palindrome that given a string, finds the longest substring of that string that is a palindrome.

def longest_palindrome(str)
  words = str.split(" ")
  palindromes = words.select { |word| is_palindrome?(word) }
  palindromes.max_by { |word| word.length }
end

p longest_palindrome("wow, the longest palindrome in this sentence is eeeeeeeee")
