#### Five Sort ####
    # Write a function that recieves an array of numbers as an argument.
    # It should return the same array with the fives moved to the end.
    # The ordering of the other elements should remain unchanged.
    #
    # For example:
    # nums = [1, 5, 3, 5, 5, 2, 3]
    # sorted = five_sort(nums)
    # sorted #=> [1, 3, 2, 3, 5, 5, 5]
    #
    # Rules
    # * You may not, at any time, create a new array.
    # * You are only permitted to use a 'while' loop
    # * You are not permitted to call any methods on the array. Only the
    # use of [], []=, and length are permitted.
def fives_on_the_end(arr)
  idx1 = 0
  while idx1 < arr.length
    if arr[idx1] == 5
      idx2 = idx1
      while idx2 < arr.length
        arr[idx2] = arr[idx2+1]
        idx2 += 1
      end
      arr[arr.length-1] = 5
    end
    idx1 += 1
  end
  arr
end

puts fives_on_the_end([1,5,2,3,4,5,1,3,5,7,6])

### Cats 'n Hats ###
      # You have 100 cats (You are quite lucky to own so many cats!).

      # You have arranged all your cats in a line. Initially, none of your cats
      # have any hats. You take 100 rounds walking around the cats, always starting
      # at the beginning. Every time you stop at a cat, you put a hat on it if it
      # doesn't have one, and you take its hat off if it has one on.

      # The first round, you stop at every cat. The second round, you only stop at
      # every 2nd cat (#2, #4, #6, #8, etc.). The third round, you only stop at
      # every 3rd cat (#3, #6, #9, #12, etc.). You continue this process until the
      # 100th round (i.e. you only visit the 100th cat).

      # Write a program that prints which cats have hats at the end.

def cats_n_hats
  cats = Array.new(100, false)
  round = 1

  while round <= 100
    cats.each_with_index do |cat, i|
      if i % round == 0
        cats[i] = !cats[i]
      end
    end
  round += 1
  end

  result = []
  cats.each_with_index do |cat, i|
      result << i if cat == true
  end
  result
end

puts cats_n_hats
