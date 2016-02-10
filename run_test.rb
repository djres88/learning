def first_n_evens(n)
  arr = []
  idx = 0
  while idx <= n do
    if idx % 2 == 0
      arr.push(idx)
    end
    idx += 1
  end
  arr
end

# another way: (work on it)
# def first_n_evens(n)
#   evens = []
#   nums = 0
#   until evens.length > n/2
#     if n % 2 == 0
#       evens.push(n)
#     end
#     n += 1
#   end
#   evens
# end

def reverse(arr)
  first = 0
  last = arr.length-1
  until first >= last
    original_first_el = arr[first]
    arr[first] = arr[last]
    arr[last] = original_first_el
    first += 1
    last -= 1
  end
  arr
end

def rotate(arr)
  if shift > 0
    while shift > 0
      el = arr.pop
      arr.unshift(el)
      shift -= 1
    end
  else
    while shift < 0
      el = arr.shift
      arr.push(el)
      shift += 1
    end
  end
  arr
end

def all_uniqs(arr1, arr2)
  uniq = []
  arr1.each do |el|
    uniq << el unless arr2.include?(el)
  end

  arr2.each do |el|
    uniq << el unless arr1.include?(el)
  end

  uniq
end

print first_n_evens(10)
print reverse(first_n_evens(10))
