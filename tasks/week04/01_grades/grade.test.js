

const yourGrade = require('./grade.js');


test('yourGrade, D', function() {

  let mark = 60;
  let expected = 'D'
  let res = yourGrade(mark);

  expect(res).toBe(expected);
  
})

test('yourGrade, B', function() {

  let mark = 80;
  let expected = 'B'
  let res = yourGrade(mark);

  expect(res).toBe(expected);
  
})

test('yourGrade, A', function() {

  let mark = 90;
  let expected = 'A'
  let res = yourGrade(mark);

  expect(res).toBe(expected);
  
})


test('yourGrade, C', function() {

  let mark = 67;
  let expected = 'C'
  let res = yourGrade(mark);

  expect(res).toBe(expected);
  
})


test('yourGrade, F', function() {

  let mark = 35;
  let expected = 'F'
  let res = yourGrade(mark);

  expect(res).toBe(expected);
  
})

test('yourGrade, I, invalid 1', function() {

  let mark = -11;
  let expected = 'I'
  let res = yourGrade(mark);

  expect(res).toBe(expected);
  
})

test('yourGrade, I, invalid 2', function() {

  let mark = 105;
  let expected = 'I'
  let res = yourGrade(mark);

  expect(res).toBe(expected);
  
})
