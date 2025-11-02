
# Anagrams

An anagram is a word play that transforms one word or phrase into another by rearranging the letters of the original word or phrase. Writers often use anagrams as pseudonyms and character names, while musicians often use them for song or album titles. Some scientists use anagrams of their discoveries as placeholder terms before their research is completed.

For example: a British naturalist Sir Peter Scott dubbed the Loch Ness Monster 'Nessiteras rhombopteryx' which is an anagram of 'Monster hoax by Sir Peter S'.

Implement a function called `anagramCheck` that accepts a line and determines whether the second line that follows is an anagram.

Remember that anagrams are case insensitive and must contain the same characters as the original, ignoring any whitespace or punctuation characters.

Tips

After asking the user for input, remember to output a blank line before outputting the result.

Remember to remove all non alphanumeric characters from a string, the only characters that should remain are between 0-9, A-Z and a-z.

Example 1

anagramCheck('Madam Curie', 'RADIUM MACE'); //true


Example 2

```
anagramCheck('Othello', 'Hello'); //false
```

Example 3
```
anagramCheck('This is what matters..', '!WhatMattersIsThis!');//true
```
