#EXERCISES 1
def hello_world
  puts "Hello world!"
end

def print_thrice(num)
  puts num
  puts num
  puts num
end

def print_thrice_thrice(num)
  puts print_thrice(num)
  puts print_thrice(num)
  puts print_thrice(num)
end

hello_world
print_thrice(5)
print_thrice_thrice(7)

# with looping

def print_thrice(num)
  3.times { |i| print num }
end


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

#REFACTOR if/else:

# def is_factor(big, small)
#   big % small == 0
# end


#EXERCISES RD 3
i = 1
while i <= 25 do
  print i
  i += 1
end

def print_up_to(num)
  i = 1
  while i <= num do
    puts i
    i += 1
  end
end

print_up_to(10)

def print_factors(num)
  i = 1
  while i <= num do
    if is_factor_of(num, i)
      puts i
    end
    i += 1
  end
end

print_factors(50)

#EXERCISES RD 4

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

#EXERCISES 5 (conditionals)
idx = 0
until idx > 20 do
  puts idx if idx % 6 != 0
  idx += 1
end

#EXERCISES 6 (strings)
def capitalize(str)
  str[0] = str[0].upcase
  str
end

puts capitalize("hello")

def shout_then_whisper(str1, str2)
  shout = str1.upcase + "!!! ... "
  whisper = str2.downcase
  shout + whisper
end

puts shout_then_whisper("go", "team")
