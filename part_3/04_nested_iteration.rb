# Exercises:
#
# Write a function called all_word_pairs(str) that given a string, returns an array of every possible pair of words.
def all_word_pairs(str)
  words = str.split(" ")
  result = []

  outer_loop = 0
  while outer_loop < words.length
    inner_loop = outer_loop + 1 ## Alternative to the edge case check
    while inner_loop < words.length
      result << [words[inner_loop], words[outer_loop]] # Could do unless inner_loop == outer_loop and change line 10 to inner_loop = outer_loop
      inner_loop += 1
    end
    outer_loop += 1
  end
  result
end

p all_word_pairs("one two three four")




# Write a function called any_make_yahtzee?(arr) that given an array, determines whether the concatenation of any two strings makes the string "yahtzee". *E.g., with the input ["yah", "car", "build", "tzee"], it should return true. With the input ["yahtz", "fish", "y"] it should return false.
def any_make_yahtzee?(arr)
  outer_loop = 0
  while outer_loop < arr.length
    inner_loop = 0
    while inner_loop < arr.length
      unless outer_loop == inner_loop
        if arr[outer_loop] + arr[inner_loop] == "yahtzee" || arr[inner_loop] + arr[outer_loop] == "yahtzee"
          return true
        end
      end
      inner_loop += 1
    end
    outer_loop += 1
  end
  false
end

puts any_make_yahtzee?(["yah", "car", "build", "tzee"])
puts any_make_yahtzee?(["yahtz", "fish", "y"])
