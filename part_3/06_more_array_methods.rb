# Write a function called range_of(arr) which returns the difference between the smallest and the greatest value of the array.
def range_of(arr)
  min = arr.min
  max = arr.max
  diff = max - min
end

p range_of([1,4,5,68,13,6])

# Write a function called greatest_uniq(arr) which returns the greatest unique (non-duplicated) number in the array.
def greatest_uniq(arr)
  max_uniq = arr[0]

  arr.each do |num|
    if arr.count(num) == 1 && num > max_uniq
      max_uniq = num
    end
  end
  max_uniq
end

p greatest_uniq([1,4,5,6,11,11,7])

# Write a function called greatest_three(arr) which given an unordered array, returns the greatest three values.
def greatest_three(arr)
  descending = arr.sort { |x, y| y <=> x }
  result = [descending[0], descending[1], descending[2]]
end

p greatest_three([80,81,80,21,49,90,2131,12,34])
