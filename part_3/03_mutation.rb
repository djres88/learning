#EX 1
arr = [1,2,3,4]

def destroy_array!(arr)
  arr = [] # This is reassignment, NOT mutation
end

puts destroy_array!(arr)
puts arr

#ASIDE: This would actually destroy the array:
def destroy_for_reals!(arr)
  arr.pop until arr.empty?
end


#EX 2
arr = [1,2,3,4]

def double_arr(original_arr)
  doubled_arr = original_arr ## This DOES NOT make a copy of another, separate array with [1, 2, 3, 4]. It actually creates a new variable that points to the same thing as the original array. If you modify doubled_arr, you modify original_arr (and vice versa)
  (0...original_arr.length).each do |i|
    doubled_arr << original_arr[i]
  end
  doubled_arr
end

puts double_arr(arr)
puts arr

#EX 3
def add_all_up_to_n(n)
  (0..n).each do |val|
    n += val
  end
  n
end

n = 5
puts add_all_up_to_n(n)
# ==> 15
puts n
# ==> 5
