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
