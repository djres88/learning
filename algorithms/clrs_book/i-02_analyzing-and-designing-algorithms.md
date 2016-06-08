#02 - Intro to Book's Framework
* Uses a pseudocode
* ex: **Insertion Sort**
- Sorting of cards
[image]
[code]

```ruby
def insertion_sort(arr)
  i = 1
  while i < arr.length
    num = arr[i]
    prev_idx = i - 1
    while prev_idx >= 0 && arr[prev_idx] > num
      arr[prev_idx + 1] = arr[prev_idx]
      prev_idx -= 1
    end
    arr[prev_idx + 1] = num
    i += 1
  end
  arr
end
```

###Loop invariants
**Insertion sort example:** At the start of each iteration of the for loop of lines 1–8, the subarray `A[1..j-1]` consists of the elements originally in `A[1..j-1]`, but in sorted order.
* To put it another way: By the time we start each loop, the elements prior to the currently indexed element `A[j]` have already been sorted.
* Loop invariants help us understand why an algorithm is correct.
* Loop invariant must satisfy:
  1. *Initialization* - it is true prior to the first iteration of the loop;
  2. *Maintenance* - if it is true before an iteration of the loop, it remains true before the next iteration;
  3. *Termination* - when the loop ends, the invariant gives us a useful property that helps show that the algorithm is correct.
* Think of this as mathematical induction: you prove a base case and an inductive step.
  - truth at first loop (initialization) is the base case
  - truth from one iteration to the next (maintenance) is the inductive step
* At the time the loop terminates, `j = n + 1`, and so the last iteration is on the subarray `A[1..n]`. Recall that at the start of each iteration the subarray consists of the same elements originally in `A[1..j-1]` but in sorted order. Knowing this, we can say that `A[1..n]` is the entire array in sorted order.

###Pseudocode
See pp. 20-22 for reference

##Analyzing Algorithms
* Analyzing an algorithm has come to mean predicting the resources that the algorithm requires. Occasionally, resources such as memory, communication band- width, or computer hardware are of primary concern; *but most often it is computational time that we want to measure.*
* **The RAM model** contains instructions commonly found in real computers: arithmetic (such as add, subtract, multiply, divide, remainder, floor, ceiling), data movement (load, store, copy), and control (conditional and unconditional branch, subroutine call and return). Each such instruction takes a constant amount of time.
* In the RAM model, we do not attempt to model the memory hierarchy that is common in contemporary computers. That is, we do not model caches or virtual memory.

###Big O
* TODO: Copy your notes from class
* The basic idea: we care about the *rate of growth* of the running time
  - Coefficients, lower-order terms fall away and we're left with the leading term. For insertion sort, that's n^2
  - In most practical applications we're dealing with large amts of data, so we care about the largest leading term

##Designing Algos

###Divide and Conquer
* Many algos are *recursive* in structure: to solve a given problem, they call themselves recursively on a sub-problem
* Three steps at each level of the recursion:
  1. **Divide** the problem into a number of subproblems
  2. **Conquer** the subproblems by solving them recursively.
  3. **Combine** the solutions to the subproblems into the solution for the original problem

* Example: merge sort
  - 3 steps:
    1. Divide the n-element sequence to be sorted into two-subsequences of n/2 elements each
    2. Sort the two subsequences recursively using merge sort
    3. Merge the two sorted subsequences to produce the sorted answer
  - The recursion "bottoms out" (hits base case) when the sequence to be sorted has length < 2 (bc there's no work -- a seq of length 1 is already sorted)
  - The key operation is merging the two sorted arrays ("combine")
  - Use a helper function, `merge(arr, p, q, r)`, where `p, q, r` are indices into the array s.t. `p <= q < r`.

```ruby
def merge_sort(arr)
  return arr if arr.length < 2

  left = arr[0...arr.length/2]
  right = arr[arr.length/2...arr.length]

  merge(
    merge_sort(left),
    merge_sort(right)
  )
end

def merge(left, right)
  sorted = []

  until left.empty? || right.empty?
    lesser = (left.first < right.first) ? left : right
    sorted.push(lesser.shift)
  end

  sorted + left + right
end
```
