Sudoku Puzzle made using Javascript and p5.js

This sudoku is made by randomly removing a number and checking if the solution exists.
If there is no solution We don't remove any more numbers and that instance of the grid 
is the final sudoku puzzle, however this is done using random removal of numbers from 
the grid, so the sudoku might not look like the kind of sudoku you'd generally see.

Making an actual sudoku puzzle involves part human part computer work, where the computer
generates a solved sudoku and the human removes the numbers he wants to remove following a
certain pattern and then that unsolved sudoku is checked by the computer for a solution.
If it is solvable then you have your sudoku.

I'm too lazy to do the above but if you want feel free to pass your own instance of sudoku
in the solve() function to see if the solution exists or not. I've just used a random function
to delete random cells.
