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
  maxval = nil #any time you're looking for the max/min or something, set the initial value to nil
  key = nil

  hash.each do |k, v|
    if maxval.nil? || v > maxval
      maxval = v
      key = k
    end
  end

  key
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

def most_common_number_with_hashes(arr)
  num_counts = Hash.new(0)
  arr.each do |num|
    num_counts[num] += 1
  end
  greatest_val_key(num_counts)
end

puts most_common_number([1,2,3,4,5,4,3,2,1,2,6,7,8,1])
puts most_common_number_with_hashes([1,2,3,4,5,4,3,2,1,2,6,7,8,1])

# Write a function called least_frequent_word(str) that takes in a string, and returns the word repeated most infrequently.
# E.g., least_frequent_word('hi ho hi hee ho hum ho hum') should return "hee"

def least_frequent_word(str)
  words = str.split
  frequency = words.length
  min_word = ""

  words.each_with_index do |word, idx|
    if words.count(word) < frequency
      frequency = words.count(word)
      min_word = words[idx]
    end
  end
  min_word
end

def least_frequent_word_with_hashes(str)
  word_counts = Hash.new(0)
  words = str.split()
  words.each do |word|
    word_counts[word] += 1
  end

  min_freq = nil
  min_word = nil
  word_counts.each do |word, count|
    if min_freq.nil? || count < min_freq
      min_word = word
      min_freq = count
    end
  end
  min_word
end


puts least_frequent_word('hi ho hi hee ho hum ho hum')
puts least_frequent_word_with_hashes('hi ho hi hee ho hum ho hum')
