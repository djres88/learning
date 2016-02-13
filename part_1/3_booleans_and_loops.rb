
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
