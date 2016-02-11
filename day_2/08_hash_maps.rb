#NOTES
#THink of them as arrays where the keys, rather than only numbers, can be indexed by anything.
#If you each over a hash, it passes both the key and the value (#each do |k, v|)

# Exercises:
#
# Write a function called word_lengths(str) that given a sentence, returns a hash of each of the words and their lengths.
# E.g., word_lengths("hello my good good pal") should return { 'hello' => 5, 'my' => 2, 'good' => 4, 'pal' => 3 }
def word_lengths(str)
  words = str.split
  result = {}

  words.each do |word|
    result[word] = word.length #Note that the second time we come to the word "good", all we're doing is reassigning it to a new value -- which also just happens to be 4. IN GENERAL: if a key name already exists, it gets reassigned rather than recreated.
  end
  result
end

puts word_lengths("hello my good good pal")


# Write a function called uniq(arr) that returns only the unique values in an array. (Hint: use a hash!)
def uniq(arr)
  result = []

  hash_of_uniqs = {}
  arr.each do |el|
    hash_of_uniqs[el] = el
  end

  hash_of_uniqs.each do |k, v|
    result << v
  end
  result
end

puts uniq([1,2,3,4,5,4,3,2,1,2,6,7,8,1])


# Write a function called greatest_val_key(hash) that takes in a hash with any keys but only integers for values, and returns the key with the largest value.
# E.g., greatest_val_key({ "a" => 5, "b" => 6, "c" => 3 }) should return "b"

def greatest_val_key(hash)
  max = 0
  hash.each do |k, v|
    max = v if v > max
  end
  max
end

puts greatest_val_key({ "a" => 5, "b" => 6, "c" => 3 })

#-----------
#Custom hash defaults

# Can change the default value using hash = Hash.new(default_value)
# Counts pattern! Hash.new(0)

# Write a function called most_common_number(arr) that takes an array, and returns the number that appears the most times. If there's a tie, just return one of the tied people.
def most_common_number(arr)
  max = 0
  arr.each do |el|
    max = el if arr.count(el) > max
  end
  max
end

puts most_common_number([1,2,3,4,5,4,3,2,1,2,6,7,8,1])
# Write a function called least_frequent_word(str) that takes in a string, and returns the word repeated most infrequently.
# E.g., least_frequent_word('hi ho hi hee ho hum ho hum') should return "hee"

def least_frequent_word(str)
  words = str.split
  min = words.length

  words.each_with_index do |word, idx|
    if words.count(word) < min
      min = idx
    end
  end

  words[min]
end

puts least_frequent_word('hi ho hi hee ho hum ho hum')
