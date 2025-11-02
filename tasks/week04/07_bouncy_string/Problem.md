# Bouncy String

You are tasked to write a function that will have 3 paramters, the intent of the function is to print each individual character based on its starting position and iterations.

These parameters are a Word, Starting Position and the Number of Iterations. The program requires the index to move from the starting position (going right first) to the boundary and then going in reverse until the number of iterations have been met.

The arguments are assumed to be in this order: word starting_position iterations
```
bouncyString('BouncyString' 2 15);
```

Example 1, word="BouncyString", start=0, n=15
```
BouncyStringnirt
```
  

Example 2, word="SomeString", start=4, n=15

```
StringnirtSemoSo
```

Example 3, word="SomeString", start=4, n=0

```
S
```

Example 4, word="BouncyString", start=-1, n=15

```
''
```

Example 5, word="BouncyString", start=1, n=-1
```
''
```
