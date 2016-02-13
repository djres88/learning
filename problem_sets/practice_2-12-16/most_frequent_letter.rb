def most_frequent_letter(str)
  letter_counts = Hash.new { |h, k| h[k] = 0 }

  characters = str.chars
  char_count = characters.length
  characters.each do |letter|
    next if letter == " "
    letter_counts[letter] += 1
  end

  most_common = characters[0]
  num_occurances = 0

  letter_counts.each do |k, v|
    if v > num_occurances
      most_common = k
      num_occurances = v
    end
  end

  most_common
end

puts "\nMost Frequent Letter:\n" + "*" * 15 + "\n"
puts most_frequent_letter("aaaaa") == "a"
puts most_frequent_letter("aaaaabbbbbb") == "b"
puts most_frequent_letter("we the people in order to form a more perfect union") == "e"
