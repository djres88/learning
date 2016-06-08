#next causes whatever follows not to run

#Adapt your odd_elems(arr) function to use next to skip over every even-indexed element.
def odd_elems(arr)
  arr.each do
    |el|
    next if el % 2 == 0
    puts el
  end
end

puts odd_elems([1,2,3,4,5,6])


#Write a function first_n_primes(n) that returns the first N many prime numbers. You'll want to use your is_prime? function that you wrote earlier. Use break in your function.
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

def first_n_primes(n)
  idx = 1
  arr = []
  while true
    arr << idx if is_prime?(idx)
    idx += 1
    break if idx > n
  end
  arr
end

puts first_n_primes(50)
