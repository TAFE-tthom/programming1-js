
const sumOfFour = require('./sum.js')


test('sumOfFour, 1, 1, 1, 1', function() {

  let expected = 4;

  let result = sumOfFour(1, 1, 1, 1);

  expect(result).toBe(expected);
  
});
test('sumOfFour, 1, 2, 3, 4', function() {

  let expected = 10;

  let result = sumOfFour(1, 2, 3, 4);

  expect(result).toBe(expected);
  
});
test('sumOfFour, 20, 20, 40, 10', function() {

  let expected = 90;

  let result = sumOfFour(20, 20, 40, 10);

  expect(result).toBe(expected);
  
});
test('sumOfFour, 9, 9, 1, 6', function() {

  let expected = 25;

  let result = sumOfFour(9, 9, 1, 6);

  expect(result).toBe(expected);
  
});
test('sumOfFour, random', function() {

  let inputs = [
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
  ];
  let nv = 0;
  inputs.forEach((e) => nv += e);
  let expected = nv;
  
  let result = sumOfFour(inputs[0], inputs[1], inputs[2], inputs[3]);

  expect(result).toBe(expected);
  
});
