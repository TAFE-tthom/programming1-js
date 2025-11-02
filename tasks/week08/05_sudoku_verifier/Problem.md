
# Sudoku Verifier


You are tasked with writing a program that will verify that a sudoku puzzle is solvable. If you are unfamiliar with a sudoku, Sudoku is a puzzle game that requires the player to place numbers in a cell that do not:

* Repeat on the same row
* Repeat on the same column
* Repeat within an 3x3 space.

A sudoku grid dimensions are multiples of 3, This means that both the length and height of the board have to be divisable by 3. In this case, we will be denoting empty spaces in the board using null.

You are required to implement the method `verifyPuzzle(board)` that will check to see if a sudoku puzzle is solvable. You must return a boolean value of true or false if it can be solved.

You can use backtracking (a kind of bruteforcing technique) for solving this problem but you may find some beneficial in solving it without resorting to those methods.


## How to test

You can test your solution against the test cases using `npm test`.


