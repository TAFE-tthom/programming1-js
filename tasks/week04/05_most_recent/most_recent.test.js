


const accessElement = require('./most_recent.js')

//
// Will check the order between the two arrays
// 
function checkOrder(actual, expected) {
  if(actual.length !== expected.length) {
    fail('Have you removed an element from the array?');
  }
  for(let i = 0; i < actual.length; i++) {
    expect(actual[i]).toBe(expected[i]);
  }
} 


test('accessElement, empty array', function() {

  let nums = [];
  let expected = [];
  let res = accessElement(nums, 0);

  expect(res).not.toBeDefined();
  
});
test('accessElement, one element', function() {

  let nums = [1];
  let expected = [1];
  let res = accessElement(nums, 0);

  expect(res).toBe(1);
  checkOrder(nums, expected);
  
});
test('accessElement, two elements', function() {

  let nums = [1, 2];
  let expected = [1, 2];
  let res = accessElement(nums, 0);

  expect(res).toBe(1);
  checkOrder(nums, expected);
  
});
test('accessElement, two elements, second access', function() {

  let nums = [1, 2];
  let expected = [2, 1];
  let res = accessElement(nums, 1);
  expect(res).toBe(2);
  checkOrder(nums, expected);
  
});
test('accessElement, many elements, in-order', function() {

  let nums = [1, 2, 3, 4, 5, 6, 7];
  let expected = [7, 1, 2, 3, 4, 5, 6];
  expect(accessElement(nums, 0)).toBe(1);
  
  expect(accessElement(nums, 1)).toBe(2); // 2, 1
  expect(accessElement(nums, 2)).toBe(3); // 3, 1, 2
  expect(accessElement(nums, 3)).toBe(4); // 4, 1, 2, 3
  expect(accessElement(nums, 4)).toBe(5); // 5, 1, 2, 3, 4
  expect(accessElement(nums, 5)).toBe(6); // 6, 1, 2, 3, 4, 5
  expect(accessElement(nums, 6)).toBe(7); // 7, 1, 2, 3, 4, 5, 6
  

  checkOrder(nums, expected);
  
});
test('accessElement, many elements, reverse-order', function() {

  let nums = [1, 2, 3, 4, 5, 6, 7];
  let expected = [2, 3, 4, 5, 6, 7, 1];
  expect(accessElement(nums, 6)).toBe(7);
  expect(accessElement(nums, 5)).toBe(6); 
  expect(accessElement(nums, 4)).toBe(5); 
  expect(accessElement(nums, 3)).toBe(4); 
  expect(accessElement(nums, 2)).toBe(3); 
  expect(accessElement(nums, 1)).toBe(2); 
  expect(accessElement(nums, 0)).toBe(2); 
  

  checkOrder(nums, expected);
  
});
