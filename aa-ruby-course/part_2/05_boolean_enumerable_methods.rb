#any? asks whether/not there are ANY elements in the array that satisfy the condition that follows.
[1,2,3,4,5].any? { |n| n.odd? }
# ==> true
[2,4].any? { |n| n.odd? }
# ==> false

#all? asks whether/not ALL elements in the array satisfy the condition that follows.
[1,2,3,4,5].all? { |n| n.odd? }
# ==> false
[1,3,5].all? { |n| n.odd? }
# ==> true

#What matters is whether the element causes the block to evaluate to true.

#none? asks whether any element in the array causes the array to evaluate to true.

["cat", "dog", "cow"].none? { |n| n == "pig" }
# ==> true

# How to implement with #each
# #any?
# #all?
# #none?
array = [1,2,3,4,5,6]
array_odds = [1,3,5]
array_no_odds = [2,4,6]

def any_is_odd?(arr)
  arr.each do |num|
    return true if num.odd?
  end
  false
end
puts any_is_odd?(array)
puts any_is_odd?(array_odds)
puts any_is_odd?(array_no_odds)

def none_are_odd?(arr)
  arr.each do |num|
    return false if num.odd?
  end
  true
end
puts none_are_odd?(array)
puts none_are_odd?(array_odds)
puts none_are_odd?(array_no_odds)

def all_are_odd?(arr)
  arr.each do |num|
    return false unless num.odd? #remember: unless = if !
  end
  true
end
puts all_are_odd?(array)
puts all_are_odd?(array_odds)
puts all_are_odd?(array_no_odds)
