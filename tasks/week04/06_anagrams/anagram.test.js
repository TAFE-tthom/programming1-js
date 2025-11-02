
const anagramCheck = require('./anagram.js');


test('anagram, Eleven plus Two, Twelve plus One', () => {

  let input = 'Eleven plus Two'
  let expected = 'Twelve plus One';

  let result = anagramCheck(input, expected);
  expect(result).toBe(true);
  
});
test('anagram, Madam Curie', () => {

  let input = 'Madam Curie'
  let expected = 'Radium Mace';

  let result = anagramCheck(input, expected);
  expect(result).toBe(true);
  
});
test('anagram, Butterfly butterfly', () => {

  let input = 'Butterfly butterfly'
  let expected = 'Flutter by, flutter by!';

  let result = anagramCheck(input, expected);
  expect(result).toBe(true);
  
});
test('anagram, Othello', () => {

  let input = 'Othello'
  let expected = 'Hello';

  let result = anagramCheck(input, expected);
  expect(result).toBe(false);
  
});
test('anagram, This is what matters...', () => {

  let input = 'This is what matters...'
  let expected = '!WhatMattersIsThis!';

  let result = anagramCheck(input, expected);
  expect(result).toBe(true);
  
});
test('anagram, Constant', () => {

  let input = 'Constant'
  let expected = 'Consonant';

  let result = anagramCheck(input, expected);
  expect(result).toBe(false);
  
});
