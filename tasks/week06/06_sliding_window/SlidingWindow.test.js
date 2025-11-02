

const SlidingWindow = require('./SlidingWindow.js');


test('SlidingWindow get 1, 0, 0', function() {


  let view = [1, 2, 3, 4];

  let sw = new SlidingWindow(view, 0, 4);

  let expected = [1, 2, 3, 4];

  expected.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
  
}) 
test('SlidingWindow get 2, 2, 2', function() {


  let view = [1, 2, 3, 4];

  let sw = new SlidingWindow(view, 2, 2);

  let expected = [3, 4];

  expected.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
  
}) 
test('SlidingWindow get 3, 1, 3', function() {


  let view = [1, 2, 3, 4];

  let sw = new SlidingWindow(view, 1, 3);

  let expected = [2, 3, 4];

  expected.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
  
}) 
test('SlidingWindow set, get 1, 1, 3', function() {


  let view = [1, 2, 3, 4];

  let sw = new SlidingWindow(view, 1, 3);

  let expected = [10, 10, 10];

  expected.forEach((e, i) => {
    sw.setElement(e, i);
  });

  expected.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
  
}) 
test('SlidingWindow set, get 2, 4, 6', function() {


  let view = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let sw = new SlidingWindow(view, 4, 6);

  let expected = [45, 67, 23, 10, 78, 22];

  expected.forEach((e, i) => {
    sw.setElement(e, i);
  });

  expected.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
  
}) 
test('SlidingWindow set, get, wOffset 1, 4, 6', function() {


  let view = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let sw = new SlidingWindow(view, 4, 6);

  let input = [45, 67, 23, 10, 78, 22];
  let expected1 = [1, 2, 3, 4, 45, 67]
  let expected2 = [23, 10, 78, 22, 11, 12]
  
  input.forEach((e, i) => {
    sw.setElement(e, i);
  });

  sw.setOffset(0);

  expected1.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
  
  sw.setOffset(6);

  expected2.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
}) 
test('SlidingWindow set, get, wOffset 2, 4, 6', function() {


  let view = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let sw = new SlidingWindow(view, 0, 6);

  let input1 = [20, 40];
  let input2 = [100, 200];
  let expected1 = [20, 40, 3, 4, 45, 67]
  let expected2 = [100, 200, 78, 22, 11, 12]
  
  input1.forEach((e, i) => {
    sw.setElement(e, i);
  });
  sw.setOffset(6);

  input2.forEach((e, i) => {
    sw.setElement(e, i);
  });
  sw.setOffset(0);

  expected1.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
  
  sw.setOffset(6);

  expected2.forEach((e, i) => {
    expect(sw.getElement(i)).toBe(e);
  }); 
}) 
