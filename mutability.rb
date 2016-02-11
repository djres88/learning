s1 = "lol"
s2 = s1
s2 << "!!" # THIS IS NOT REASSIGNMENT! IT'S MUTATION!! You can mutate strings and arrays and more; you can't mutate numbers. Basically anything you use the shovel operator on can be mutated.
puts s2
# ==> "lol!!"
puts s1
# ==> "lol!!"

#versus
s1 = "lol"
s2 = s1
s2 = "!!" # THIS IS REASSIGNMENT!
puts s2
# ==> "!!"
puts s1
# ==> "lol"

#SYMBOLS ARE IMMUTABLE STRINGS
#The usual use-case is to be a key in a hash
