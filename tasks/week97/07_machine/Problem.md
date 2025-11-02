
# The Machine

You have been tasked with implementing a virtual machine and operations for a small virtual machine language. You will be tasked with implementing the following:


## Instructions

* `LDD a1 r1` - Loads from address `a1` and writes to `r1`.

* `STR a1 r1` - Stores data in `r1` and writes back to `a1`. 

* `ADD r1 r2 r3` - The `ADD` operation will use two operands to perform addition. The result is written to r3.

* `SUB r1 r2 r3` - The `SUB` operation will use two operands to perform subtractio. The result is written to r3.

* `DIV r1 r2 r3` - The `DIV` operation will use two operands to perform division,
  if r2 is 0, the execution should halt as a divide by 0 exception has occurred.

* `MUL r1 r2 r3` - The `MUL` operation will use two operands (r1 and r2) to perform multiplication and store the result in r3.

* `CMP r1 r2 r3` - The `CMP` operation will compare the values in r1 and r2 and see if they are the same, if they are the same, 

* `JMP r1 r2` - The `JMP` operation will check to see if r1 is non-zero and will change the program counter to r2.

* `PRT r1` - Interprets the integer in `r1` as a character and prints it.


## How does the machine work? 
