
# Write a method that takes an array of words and returns only the words that are
# anagrams of a given string.

def anagrams(str, arr)
  anagrams = []

  arr.each do |string|
    word_length = string.length
    idx = 0
    isAnagram = true

    while idx < word_length
      unless string.count(string[idx]) == str.count(string[idx])
        isAnagram = false
      end
      idx += 1
    end

    if isAnagram == true
      anagrams << string
    end
  end
  anagrams
end

#Tests
puts "\nAnagrams:\n" + "*" * 15 + "\n"
puts anagrams("cat", ["cat"]) == ["cat"]
words = ["cat", "act", "bat", "tac"]
puts anagrams("tca", words) == ["cat", "act", "tac"]
words = ["aaa", "aa", "a"]
puts anagrams("aa", words) == ["aa"]

# ************************************
# Write a boolean function that returns true if the vowels in a given word appear in order

#helper function returns an ordered array of vowels from a given word (string)
def get_vowels_in_word(word)
  vowels = ["a", "e", "i", "o", "u"]
  vowels_in_word = []
  characters = word.chars

  characters.each do |letter|
    vowels.each do |el|
      if letter == el
        vowels_in_word << letter
      end
    end
  end
  vowels_in_word
end

#second helper function returns a boolean t/f whether each element in an array (starting at pos 1) is greater than the preceding element. we can evaluate characters (vowels) in this way, too — forex "a" < "e" returns true.
def is_ascending?(array)
  idx = 1
  while idx < array.length
    unless array[idx] >= array[idx-1]
      return false
    end
    idx += 1
  end
  true
end

def ordered_vowel_word?(word)
  order_of_vowels = get_vowels_in_word(word)
  return is_ascending?(order_of_vowels)
end

#Tests
puts "\nOrdered Vowel Word:\n" + "*" * 15 + "\n"
puts ordered_vowel_word?("car")
puts ordered_vowel_word?("academy")
puts !ordered_vowel_word?("programmer")
puts !ordered_vowel_word?("grapefruit")

# ************************************
# Write a function that takes an array of words and returns the words whose vowels appear in order

def ordered_vowels(words)
  words.select { |el| ordered_vowel_word?(el) }
end

puts "\nOrdered Vowels:\n" + "*" * 15 + "\n"
puts ordered_vowels(["are"]) == ["are"]
puts ordered_vowels(["era", "are", "ear"]) == ["are"]
puts ordered_vowels(["hey", "wassup", "hello"]) == ["hey", "wassup", "hello"]
puts ordered_vowels(["firefox", "chrome", "safari", "netscape", "aeiou"]) == ["safari", "aeiou"]

# ************************************
# Write a function that takes two years and returns all the years within that range with no repeated digits.
# Hint: helper method?
# no_repeat_years(2010,2015) -> [2013,2014,2015]

def no_repeat_digits?(num)
  str = num.to_s
  str.each_char do |el|
    unless str.count(el) == 1
      return false
    end
  end
  true
end

def no_repeat_years(first_year, last_year)
  all_years_in_range = []
  range = (first_year..last_year)
  range.each { |year| all_years_in_range << year}

  no_repeats = all_years_in_range.select { |yr| no_repeat_digits?(yr) }

  no_repeats
end

puts "\nNo Repeat Years:\n" + "*" * 15 + "\n"
puts no_repeat_years(1990, 2000) == []
puts no_repeat_years(1900,1902) == [1902]
puts no_repeat_years(2016, 2020)  == [2016, 2017, 2018, 2019]


# ************************************
# Write a method that takes a string of lower case words (no punctuation) and returns the letter that occurs most frequently.
# Use a hash within your method to keep track of the letter counts.
#
# I would set up the hash with the line
# hash = Hash.new{|h, k| h[k] = 0}
# This initializes the hash with a block to be run if you try to look up a key that isn't in the hash.  Here, we
# set the value at that key to zero if we haven't already seen it.

def most_frequent_letter(str)
  letter_counts = Hash.new { |h, k| h[k] = 0 }

  characters = str.chars
  char_count = characters.length
  characters.each do |letter|
    next if letter == " "
    letter_counts[letter] += 1
  end

  most_common = characters[0]
  num_occurances = 0

  letter_counts.each do |k, v|
    if v > num_occurances
      most_common = k
      num_occurances = v
    end
  end

  most_common
end

puts "\nMost Frequent Letter:\n" + "*" * 15 + "\n"
puts most_frequent_letter("aaaaa") == "a"
puts most_frequent_letter("aaaaabbbbbb") == "b"
puts most_frequent_letter("we the people in order to form a more perfect union") == "e"


# ************************************
# Write a method that takes a string of lower case words (no punctuation) and returns an array of letters that occur more
# than once.  We'll need to account for spaces, too.  Again, there are a few ways you can do this.


#There's probably a better way to do this (i.e. other than using the hash to grab only the uniques). Seems redundant to keep adding a letter (or rather reassigning the hash value) even after you know it's a non-unique letter. Come back to it in a week.
def non_unique_letters(str)
  hash = Hash.new(0)
  non_uniqs = []

  characters = str.chars
  characters.each do |letter|
    next if letter == " "
    if str.count(letter) > 1
      hash[letter] = "non-unique"
    end
  end

  hash.each do |k, v|
    non_uniqs << k
  end

  non_uniqs
end

puts "\nNon-unique Letters:\n" + "*" * 15 + "\n"
puts non_unique_letters("abbbcdddde") == ["b", "d"]
puts non_unique_letters("abcde") == []
puts non_unique_letters("aabbccddee") == ["a", "b", "c", "d", "e"]

# ************************************
# Write a method that takes a string of lower case words and returns an array of letters that do not occur in the string.
# This creates a hash containing all the letters as keys and initializes their values (counts) to zero.  This problem
# is different enough from the first problem that we can't initialize our hash the same way, at least not without
# thinking very carefully.  Do you know why?
# We'll need to account for spaces, too.  Again, there are a few ways you can do this.

def missing_letters(str)
  #Not sure I understand the prompt... or whether it's specifically asking for a hash ("This creates a hash..."). Can't we just do:
  all_characters = "abcdefghijklmnopqrstuvwxyz"
  missing_chars = []

  all_characters.each_char do |el|
    if str.count(el).zero?
      missing_chars << el
    end
  end
  missing_chars
end

puts "\nMissing letters:\n" + "*" * 15 + "\n"
puts missing_letters("abcdefghijklmnopqrstuvwxyz") == []
puts missing_letters("abcdefghiklmnopqrstuvwxyz") == ["j"]
puts missing_letters("abcdefghiklmnopstuvwxyz") == ["j", "q", "r"]
