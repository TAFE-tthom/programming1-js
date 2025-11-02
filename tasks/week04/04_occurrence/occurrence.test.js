

const occurrence = require('./occurrence');


test('occurrence, Hello', function() {

  let s = "Hello";
  let c = 'l'
  let count = occurrence(s, c);

  expect(count).toBe(2);
  
});


test('occurrence, What is the time', function() {

  let s = "What is the time";
  let c = 't'
  let count = occurrence(s, c);

  expect(count).toBe(3);
  
});

test('occurrence, Long long time ago', function() {

  let s = "Long long time ago";
  let c = 'l'
  let count = occurrence(s, c);

  expect(count).toBe(2);
  
});

test('occurrence, 11223344332211444', function() {

  let s = "11223344332211444";
  let c = '4'
  let count = occurrence(s, c);

  expect(count).toBe(5);
  
});
