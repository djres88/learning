# First implementation: Quick-find (eager approach) using an array
class QuickFindUF
  def initialize(size = 10)
    @array = Array.new(size)
    @array.each_index { |i| @array[i] = i }
  end

  def connected?(node1, node2)
    @array[node1] == @array[node2]
  end

  def create_union(from_node, to_node)
    # Re-assign a node's value to the to_node iff that node is connected to the from_node.
    @array.each_index do |node|
      @array[node] = @array[to_node] if connected?(node, from_node)
    end
    @array
  end

  # Just to check the API.
  def array
    @array
  end
end

class QuickUnionUF
  def initialize(size = 10)
    @array = Array.new(size)
    @array.each_index { |i| @array[i] = i }
  end

  def root(node)
    # Recall that a node is a root iff its value equals its index. So, if the node's index is not equal to its value, look up the parent chain (go from index to index) until you find a root — a node where the value equals the index.
    while node != @array[node]
      node = @array[node]
    end
    node
  end

  def connected?(node1, node2)
    root(node1) == root(node2)
  end

  def create_union(from_node, to_node)
    # Make the to_node a child of the from_node.
    @array[from_node] = root(to_node)
    @array
  end

  def array
    @array
  end
end

class BetterUnionUF
  def initialize(size = 10)
    # Track the # of elements rooted at each node.
    @array = Array.new
    size.times do |i|
      @array << {value: i, size: 1}
    end
  end

  # TODO: Review ruby's [] and []= syntax.

  def root(idx)
    idx_value = @array[idx][:value]
    while idx != idx_value
      # OPTIMIZATION (line 67): Path compression. Make every other node in the path point to its grandparent. No reason not to do this! We're already hitting each node anyway.
      @array[idx][:value] = @array[idx_value][:value]
      # Keeps tree almost completely flat!
      idx = idx_value
    end
    @array[idx]
  end

  def connected?(idx1, idx2)
    root(idx1) == root(idx2)
  end

  def create_union(idx1, idx2)
    # Make minimum calls to the root function, which is proportional to the depth M of the tree
    root1 = root(idx1)
    root2 = root(idx2)
    # Make the smaller tree the child of the larger tree, and update the larger tree's size accordingly.
    if root1[:size] >= root2[:size]
      parent_tree_root = root1
      child_tree_root = root2
    else
      parent_tree_root = root2
      child_tree_root = root1
    end

    child_tree_root[:value] = parent_tree_root[:value]
    parent_tree_root[:size] += child_tree_root[:size]
    # just return the array by default
    @array
  end

  def array
    @array
  end
end

test = BetterUnionUF.new
test.create_union(4,3)
test.create_union(3,8)
test.create_union(6,5)
test.create_union(9,4)
test.create_union(2,1)
p test
