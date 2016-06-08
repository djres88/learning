# puts an array of all of the numbers between 30 and 50, inclusive.
puts (30..50).to_a

# Write a function called letters_before(char) that given a character in the alphabet, returns all of the characters that go before it in the alphabet.
def letters_before(char)
  ("a"..char).to_a
end
puts letters_before("m")

# Write a function called to_range(arr) that given an ordered array of every value from n to m, returns the corresponding range.
# For example, the to_range([4, 5, 6, 7] should return (4..7) as a range.
def to_range(arr)
  (arr[0]..arr[-1])
end
#OR
def to_range(arr)
  (arr.first..arr.last)
end
