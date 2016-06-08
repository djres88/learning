

#EXERCISES 2
def times_three_and_plus_five(num)
  (num * 3) + 5
end

def even_or_odd(num)
  if num % 2 == 0
    "even"
  else
    "odd"
  end
end

def division_plus_remainder(big_num, small_num)
  (big_num / small_num) + (big_num % small_num)
end

def is_factor_of(big_num, small_num)
  if big_num % small_num == 0
    true
  else
    false
  end
end

puts times_three_and_plus_five(4)
puts even_or_odd(10)
puts division_plus_remainder(7, 2)
puts is_factor_of(9, 3)
puts is_factor_of(9, 4)
