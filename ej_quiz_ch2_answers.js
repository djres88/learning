// Quiz for Chapter 2: Program Structure

// FIRST, THREE QUIZZES FROM THE READINGS

/*
  (1) LOOPING A TRIANGLE

  Write a loop that makes seven calls to console.log to output the following triangle:

  #
  ##
  ###
  ####
  #####
  ######
  #######
  It may be useful to know that you can find the length of a string by writing .length after it.

  HINT:
  var abc = "abc";
  console.log(abc.length);
  // → 3
*/
// YOUR ANSWER TO #1

var x = "#";
while (x.length < 7) {
  console.log(x);
  x = x + "#";
}
//-----------------------------------
/*
  (2) FIZZBUZZ

  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

  When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

  (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)
*/
// YOUR ANSWER TO #2:

var x = 1;
while (x <= 100) {
  if (x % 15 == 0)
    console.log("FizzBuzz");
  else if (x % 5 == 0)
    console.log("Buzz");
  else if (x % 3 == 0)
    console.log("Fizz");
  else
    console.log(x);
  x++;
}
//------------------------------------
/*
(3) CHESS BOARD

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/
// YOUR ANSWER TO #3:
// Try 6 works (see below). Would still like a way to make this shorter, though.

/* Try 7 -- an attempt at simplifying. Still only works for evens. Want to see if there's a way that doesn't involve splitting branches between rows. */
var checkerboard = "";
var grid_size = Number(prompt("Grid size?",""))
// set the counter threshold to include \n spaces:
for (counter = 1; counter <= (grid_size * grid_size) + grid_size; counter++) {
  if (counter % (grid_size + 1) == 0)
    checkerboard += "\n";
  else if ((counter + grid_size) % 2 == 0)
    checkerboard += "#";
  else
    checkerboard += " ";
  }
console.log(checkerboard)

//Try 6.. WORKS WELL ENOUGH, but I think it could be simpler.
var checkerboard = "";
  do {
    var grid_size = Number(prompt("Grid size?",""))
    if (!grid_size)
      alert("The number must be an integer, stupid.");
    } while (!grid_size)
var idx_row = 1
var idx_column = 1
while (idx_row <= grid_size) {
  if (idx_row % 2 == 0)
    while (idx_column <= grid_size) {
      if (idx_column % 2 == 0)
        checkerboard += "#";
      else
        checkerboard += " ";
      idx_column += 1;
      }
  else
    while (idx_column <= grid_size) {
      if (idx_column % 2 == 0)
        checkerboard += " ";
      else
        checkerboard += "#";
      idx_column += 1;
      }
  idx_column = 1
  checkerboard += "\n";
  idx_row += 1
  }
console.log(checkerboard)

//TRY 5 -- only works for odd numbers. hmmm
var checkerboard = "";
var grid_size = Number(prompt("Grid size?",""));
for (var counter = 1; counter < grid_size * grid_size; counter++) {
    if (counter % grid_size == 0) {
      if (counter % 2 == 0)
        checkerboard += "#" + "\n";
      else
        checkerboard += " " + "\n";
      }
    else if (counter % 2 == 0)
      checkerboard += "#";
    else
      checkerboard += " ";
}
console.log(checkerboard)



//TRY 4
var grid = "";
var column = 1;
var grid_size = Number(prompt("What size grid would you like?",""))
while (column <= grid_size) {
  if (column % 2 == 0)
    var row = 1;
    while (row <= grid_size) {
      if (row % 2 == 0)
        grid += "#";
      else
        grid += " ";
      row++;
      }
  else
    var row = 1;
    while (row <= 0) {
      if (row % 2 == 0)
        grid += " ";
      else
        grid += "#";
      row++;
      }
  column ++
    }
}
console.log(grid)


//TRY 3
var my_grid = "";
var row_counter = 0
var height_counter = 0
var grid_size = Number(prompt("What grid size would you like?",""));
while (row_counter <= grid_size) {
  if (row_counter % 2 == 0)
    my_grid += "#";
  else
    my_grid += " ";
    while
}

//TRY 2
for (var counter = 1; counter < grid_size; counter ++)
  if (counter % 2 == 0)
    my_grid += "\n" + my_grid;
  else
    my_grid += "\n" + my_grid;
console.log(my_grid);


//TRY 1
}
while (counter < grid_width) {
  if (counter % 2 == 0)
    my_grid += "#";
  else
    my_grid += " ";
  counter ++
}
