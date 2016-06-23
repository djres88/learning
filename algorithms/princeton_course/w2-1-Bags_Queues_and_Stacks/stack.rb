# Linked List Implementation
class Link
  attr_accessor :prev, :next, :value

  def initialize(value = nil)
    @prev = nil
    @next = nil
    @value = value
  end
end

class LinkedList
  def initialize
    @head = Link.new
    @tail = Link.new
    @head.next = @tail
    @tail.prev = @head
  end

  def push(link)
    @tail.prev.next = link
    link.prev = @tail.prev
    link.next = @tail
    @tail.prev = link
  end

  def pop
    raise "List empty!" if @tail.prev == @head
    returnval = @tail.prev
    @tail.prev = returnval.prev
    @tail.prev.next = @tail
    returnval
  end
end

# Array Implementation
class Stack
  attr_reader :stack, :count

  def initialize(arr = Array.new(4))
    @stack = arr
    @count = 0
  end

  def push(item)
    @count += 1
    # Double the size of the array if the count reaches the array's length
    double_size! if @stack.length == @count
    @stack[@count-1] = item
  end

  def pop
    raise "Stack is empty!" if @count == 0
    @count -= 1
    # Halve the size of the array if the count is <= 25% of the array's length
    half_size! if @count <= (@stack.length * 0.25)
    returnval = @stack[@count]
    @stack[@count] = nil
    returnval
  end

  def double_size!
    new_stack = Array.new(@count*2)
    @stack.each_with_index { |el, i| new_stack[i] = el }
    @stack = new_stack
  end

  # To maintain a space-efficient array (implementation from Princeton course)
  def half_size!
    new_stack = Array.new(@stack.length/2)
    new_stack.each_index { |i| new_stack[i] = @stack[i] }
    @stack = new_stack
  end
end
