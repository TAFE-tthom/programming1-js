const { join } = require('./adding_arrays.js');

function Adding_Empty_Arrays()
{

  let numbersA = [];
  let numbersB = [];

  let result = join(numbersA, numbersB);
  let answer = [];
  expect(result).toEqual([]);
  expect(result).toEqual( answer);

}


function Adding_Empty_Array_With_OneElementArray()
{

  let numbersA = [1];
  let numbersB = [];

  let result = join(numbersA, numbersB);
  let answer = [1];
  expect(result).toEqual( answer);

}



function Adding_Arrays_WithOneElement()
{

  let numbersA = [1];
  let numbersB = [2];

  let result = join(numbersA, numbersB);
  let answer = [1, 2];
  expect(2).toEqual( result.length);
  expect(answer).toEqual( result);

}


function Adding_Arrays_WithTwoElements()
{

  let numbersA = [1, 3];
  let numbersB = [2, 4];

  let result = join(numbersA, numbersB);
  let answer = [1, 3, 2, 4];
  expect(4).toEqual( result.length);
  expect(answer).toEqual( result);

}


function Adding_Arrays_WithThreeElements()
{

  let numbersA = [1, 2, 3];
  let numbersB = [4, 5, 6];

  let result = join(numbersA, numbersB);
  let answer = [1, 2, 3, 4, 5, 6];
  expect(6).toEqual( result.length);
  expect(answer).toEqual( result);

}


function Adding_Arrays_OfDifferentSize_1()
{

  let numbersA = [1];
  let numbersB = [4, 5, 6];

  let result = join(numbersA, numbersB);
  let answer = [1, 4, 5, 6];
  expect(4).toEqual( result.length);
  expect(answer).toEqual( result);

}


function Adding_Arrays_OfDifferentSize_2()
{

  let numbersA = [1, 2, 3, 4, 5, 6, 7, 8];
  let numbersB = [9, 10, 11];

  let result = join(numbersA, numbersB);
  let answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  expect(11).toEqual( result.length);
  expect(answer).toEqual( result);

}

test("Adding_Empty_Arrays", Adding_Empty_Arrays);
test("Adding_Empty_Array_With_OneElementArray", Adding_Empty_Array_With_OneElementArray);
test("Adding_Arrays_WithOneElement", Adding_Arrays_WithOneElement);
test("Adding_Arrays_WithTwoElements", Adding_Arrays_WithTwoElements);
test("Adding_Arrays_WithThreeElements", Adding_Arrays_WithThreeElements);
test("Adding_Arrays_OfDifferentSize_1", Adding_Arrays_OfDifferentSize_1);
test("Adding_Arrays_OfDifferentSize_2", Adding_Arrays_OfDifferentSize_2);
