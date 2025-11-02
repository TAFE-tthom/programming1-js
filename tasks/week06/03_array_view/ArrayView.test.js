

const array_view = require('./ArrayView.js')



test('from 1 to 10, gets 2 to 6', function() {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8];
  let view = array_view(nums, 1, 5);
  
  expect(view).toEqual([
    2, 3, 4, 5, 6
  ])
});


test('from 20 to 40, gets 25 to 35', function() {
  let nums = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    32, 33, 34, 35, 36, 37, 38, 39, 40];
  let view = array_view(nums, 5, 15);
  
  expect(view).toEqual([
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
  ])
});



test('from -8 to 2, gets -6 to 1', function() {
  let nums = [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2];
  let view = array_view(nums, 2, 9);
  
  expect(view).toEqual([
    -6, -5, -4, -3, -2, -1, 0, 1
  ])
});
