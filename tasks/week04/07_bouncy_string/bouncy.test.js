

const bouncyString = require('./bouncy.js')


test('BouncyString 0 15', function() {

  let word = 'BouncyString'
  let start = 0;
  let iters = 15;

  let expected = 'BouncyStringnirt';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('SomeString 4 15', function() {

  let word = 'SomeString'
  let start = 4;
  let iters = 15;

  let expected = 'StringnirtSemoSo';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('SomeString 4 0', function() {

  let word = 'SomeString'
  let start = 4;
  let iters = 0;

  let expected = 'S';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('F 0 4', function() {

  let word = 'F'
  let start = 0;
  let iters = 4;

  let expected = 'FFFFF';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('TwoOfAKind 3 9', function() {

  let word = 'TwoOfAKind'
  let start = 3;
  let iters = 9;

  let expected = 'OfAKindniK';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('SampleString 0 11', function() {

  let word = 'SampleString'
  let start = 0;
  let iters = 11;

  let expected = 'SampleString';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('SampleString 11 11', function() {

  let word = 'SampleString'
  let start = 11;
  let iters = 11;

  let expected = 'gnirtSelpmaS';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('SampleString 5 11', function() {

  let word = 'SampleString'
  let start = 5;
  let iters = 11;

  let expected = 'eStringnirtS';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('111 0 5', function() {

  let word = '111'
  let start = 0;
  let iters = 5;

  let expected = '111111';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('Seg-String-# 11 4', function() {

  let word = 'Seg-String-#'
  let start = 11;
  let iters = 4;

  let expected = '#-gni';
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('SampleString 11 -4', function() {

  let word = 'SampleString'
  let start = 11;
  let iters = -4;

  let expected = null;
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
test('SampleString -4 2', function() {

  let word = 'SampleString'
  let start = -4;
  let iters = 2;

  let expected = null;
  
  let result = bouncyString(word, start, iters);

  expect(result).toBe(expected);
  
});
