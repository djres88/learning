def fibs(n)
  return [] if n == 0 || !n.is_a?(Integer)
  return [1] if n == 1
  return [1, 1] if n == 2

  prev_fib = fibs(n-1)

  sum = prev_fib[-1] + prev_fib[-2]
  prev_fib << sum
  prev_fib
end
