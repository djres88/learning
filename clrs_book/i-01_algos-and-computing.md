#Algorithms in Computing
* Take *sorting* algorithms as the main/fundamental intro (bc so many algos use it as an intermediate step)
* Which sorting algorithm you should use depends on:
  1. # of items
  2. Extent of pre-sorting (i.e. how sorted are the elements already?)
  3. Restrictions on item values (e.g. positive integers)
  4. Architecture of computer (recall that heap sort was best before computers had caching)
  5. Type of storage

  (#s 4/5 have to do w/ hardware -- and so have to do with computing)

* Can draw some general principles 
  - You can solve a given problem in a number of ways; several algorithms may offer a "complete" solution
  - But some algorithms are more practical than others (see **efficiency**, later)
  - *The challenge is in finding the best solution*, given what you're aiming to accomplish

* A few examples:
  - Longest Path --> DK Lineups (graph)
  - Shortest Path --> Truck Routes (graph)
  - Largest Matching Subset --> DNA Sequencing (Dynamic Programming)
  - Parts Dependencies for Car --> Topological Sort
