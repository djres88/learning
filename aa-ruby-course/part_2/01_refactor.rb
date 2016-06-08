#REFACTOR
# def  hello_world
# puts "Hello, world!" end

def hello_world
  puts "Hello, world!"
end

#REFACTOR
# def is_prime num
#  n = 2
#  while n < num
#      if (num%n==0)
#        return (false)
#      end
#      n = n + 1
#    end
#    return true
#  end

def is_prime?(num)
  try_factor = 2

  while try_factor < num #or sqrt of num
    return false if num % try_factor == 0
    try_factor += 1
  end

  true
end

puts is_prime?(5)
puts is_prime?(6)
