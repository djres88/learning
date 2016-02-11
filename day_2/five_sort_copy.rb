# Five Sort
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

puts fives_on_the_end([1,5,2,3,4])

#Cats and Hats
def cats_n_hats
  cats = Array.new(100, false)
  round = 1
  while round <= 100
    cats.each_with_index do |cat, i|
      if cat[i] % round == 0
        cats[i] = !cats[i]
      end
    end
  round += 1
  end
  cats
end

puts cats_n_hats
