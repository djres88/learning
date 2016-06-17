#Steps to developing a usable Algorithm
- Model the problem
- Find an algorithm to solve
- Evaluate: fast enough, fits in memory?
- If not, figure out why/way to address it
- iterate until satisfied

#Dynamic Connectivity
##The Problem
- Given a set of N objects
  * Union command: create connection between two objects
  * Find/connected query: is there a path connecting the two objects?
- Some properties to consider
  * Reflexive: p is connected to p
  * symmetric: if p is connect to q, then q is connected to p
  * transitive: if p is connected to q && q is connected to r, then p is connected to r
  * **connected components:** maximal `set` of ojects that are mutually connected [pic]

##Implement the Operations
* Find: check if two objects are in the same component
* Union command: replace components containing two objects with their union (?)

##Version 1: QuickFindUF
* First implementation: Quick-find (eager approach) using an array
* COMPLEXITY
 - Initialize: N
 - Union: N (too expensive - every union operation has to go through the entire array. So n union operations on n objects would take n^2, or quadratic time.)
 - Find: 1
* Aside: as computers get bigger, quadratic time gets even slower. It has to look at more spaces in memory. For example, 40 yrs ago computers could touch all of its memory in ~1sec. That time has held constant today, because even though computers have gotten 10x faster, they're also 10x as big.

## v2: QuickUnionUF
* Data structure is still an array, but think of a tree: each component has a root.
* #connected?(p, q): check if p and q have the same root
* #create_union(p, q): set the id of p's root equal to the id of q's root (only one value changes)
* COMPLEXITY
  - Tree could get too tall
  - Solution: don't let the tree get too tall (see below)

##Improvements

###1. Weighting
* Modify quick-union to avoid tall trees
* Keep track of size of each tree (i.e. # of notes)
* Balance by linking root of smaller tree to root of larger tree.
* Guarantees the smaller tree goes below
* ANALYSIS/COMPLEXITY
  - Guarantees smallest average distance to the root
  - Running time: depth of any node is at most `lg N`
  - `#connected?(p,q)`: proportional to depth of `p` and `q` => `lg N`
  - `create_union(p,q)`: `lg N`
  - `initialize(N)`: proportional to N
* `N + M LOG N`

But we can do even better!

###2. Weighting with Path Compression
* Any time you're finding p, you might as well reset its root to the grandparent.  
* ANALYSIS/COMPLEXITY
  - `N + M LG N`
  - Starting from an empty data structure, any sequence of M union-find ops on N objects makes *at worst* (N + M (lg * N)) array accesses
    * Note on `lg*N`: It's basically always less than 5
    * So it's *basically* linear (N + M); about as good as you can get

##SUMMARY
algorithm | worst-case
----------|-------------
quick-find                      | M*N
quick-union                     | M*N
weighted QU                     | N + M log N
QU + path compression           | N + M log N
weighted QU + path compression  | N + M lg*N ("lg star N")

* For reference: Given 10^9 unions and finds with 10^9 objects, WQUPC reduces time from 30 years to 6 seconds

##Applications
* Dynamic Connectivity
* Matlab's image processing
* Least common ancestor
* Games (go, hex)
* Percolation

###Percolations
* N-by-N grid of sites
* A system is "percolated" if you can get from top to bottom
* E.g. water flowing down
* How do we know whether a system percolates?
  - Very sharp threshold
  - Site vacancy probability ~0.593 is about the threshold
  - Solved this with Monte Carlo simulations bc math models haven't solved yet
  - Needed to add a clever trick: create a virtual top site and a virtual bottom site to run union find [picture]
    * Alternative would be quadratic: with every new site vacancy you introduce, you'd need to run union-find on top AND bottom row
  - All you do is:
    1. Randomly make sites vacant (connect to its vacant connections)
    2. Check whether there's a path from the virtual top to the virtual bottom
    3. Repeat
  - You can use the code you've already developed! Make a game with beavers building a dam or something!
