# You can even use negative indices! arr[4..-1] (-1 is arr.length-1)

arr = (20..50).to_a
print arr[40..-1]

arr = (20..50).step(5).to_a
print arr[20..-1]

arr = ("a".."z").to_a

# Initialize an array of 100 elements with a default value of "yes", and then set every other value to "no".

one_hundred = Array.new(100, "yes") #It's okay! Weird things will happen iff you mutate the object ("string").
one_hundred.each_with_index do |el, idx|
  if idx % 2 != 0
    one_hundred[idx] = "no" #note that this works because you're reassigning the variable, not modifying the string to which all variables are assigned. one_hundred.idx << "!!" would mess this up. See mutability for more info.
  end
end
#IN CLASS
(1..99).step(2).each { |n| a[n] = "no" }


# Now take that array and puts the subarray of only the first 10 elements (don't over-index!)
puts one_hundred[0...10]
puts "-------"
# Then puts the last 10 elements.
puts one_hundred[-10..-1]
