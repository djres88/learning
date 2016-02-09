def first_n_evens(n)
  arr = []
  idx = 0
  while idx <= n do
    if idx % 2 == 0
      arr.push(idx)
    end
    idx += 1
  end
  return arr
end

def reverse(arr)
  first = 0
  last = arr.length -1

  idx = arr.length - 1

  while idx >= 0
    reversed_arr.push(arr[idx])
    idx -= 1
  end

  reversed_arr
end

print first_n_evens(10)
print reverse(first_n_evens(10))
