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


def fives_on_the_end_in_class(arr)
  count = 0
  while count < arr.length
    idx = 0
    while idx < arr.length - 1
      if arr[idx] == 5
        arr[idx] = arr[idx+1]
        arr[idx+1] = 5
        # arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
      end
      idx += 1
    end
    count += 1
  end
  arr
end

puts fives_on_the_end_in_class([1,5,5,2,3,4,5,1,3,5,7,6])

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
