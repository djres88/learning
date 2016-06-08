#Nested Iteration
* Example: do any two elements in the array sum up to 0?
  * Check every element against every other element
  * Beware edge cases (e.g. don't want to check element against itself)

#Enumerables
* Talking about things you can do over enumerables (e.g. arrays are enumerable)

##select and reject
```ruby
#with each
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
```
