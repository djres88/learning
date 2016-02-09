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
cats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

def hats_on_cats(my_cats)
  cycle = 1
  idx = 1
  while cycle <= my_cats.length
    while idx <= my_cats.length
      if idx % cycle == 0
        if my_cats[idx-1] == 0
          my_cats[idx-1] = 1
        else
          my_cats[idx-1] = 0
        end
      end
      idx += 1
    end
    cycle += 1
  end
  return my_cats
end

arr_after_cycles = hats_on_cats(cats)

def print_cats_with_hats(arr)
  cats_with_hats = []
  i = 0
  while i < arr.length
    if arr[i] == 1
      cats_with_hats.push(i)
    end
  end
  return cats_with_hats
end

answer = print_cats_with_hats(arr_after_cycles)

print answer
#INCOMPLETE
