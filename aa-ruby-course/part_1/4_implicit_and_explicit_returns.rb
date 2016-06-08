#EXERCISES RD 4
def is_factor_of(big_num, small_num)
  if big_num % small_num == 0
    true
  else
    false
  end
end

def largest_factor(num)
  i = num - 1
  while i > 0 do
    if is_factor_of(num, i)
      return i
      break
    end
    i -= 1
  end
end

def is_prime?(num)
  largest_factor(num) == 1
  #LEAVE OUT THE IF
end

puts largest_factor(30)
puts is_prime?(10)
