def cats
  cats = Array.new(100, false)
  (1..100).each do |round|
    cats.each_index do |cat_index|
      cat_num = cat_index + 1
      if cat_num % round == 0
        cats[cat_index] = !cats[cat_index]
      end
    end
  end
  hat_numbers = []
  cats.each_with_index do |cat, cat_index|
    cat_num = cat_index + 1
    hat_numbers << cat_num if cat
  end
  hat_numbers
end

p cats

def cats_2
  cats = []
  i = 0
  while i < 100
    cats << false
    i += 1
  end

  round = 1
  while round <= 100
    cat_idx = 0

    while cat_idx <= 100
      cat_num = cat_idx += 1
      if cat_num % round == 0
        cats[cat_idx] = !cats[cat_idx]
        cat_idx += 1
    end

    round += 1
  end
