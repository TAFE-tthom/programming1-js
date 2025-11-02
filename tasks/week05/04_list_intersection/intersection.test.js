

const intersection = require('./intersection.js')

function ListIntersection_Empty_Lists_Test()
{

  let A =  [ ];
  let B =  [ ];
  let result = intersection(A, B);
  let answer =  [ ];

  expect(answer.Count(), result.Count());
  expect(result).toBeDefined();
  expect(answer).toBe(result);
}


function ListIntersection_Single_Lists_Test()
{

  let A =  [ 1 ];
  let B =  [ 1 ];
  let result = intersection(A, B);
  let answer =  [ 1 ];

  expect(answer.Count(), result.Count());
  expect(result).toBeDefined();
  expect(answer).toBe(result);
}



function ListIntersection_Single_With_3_Elements_Each()
{

  let A =  [ 1, 2, 3 ];
  let B =  [ 4, 2, 5 ];
  let result = intersection(A, B);
  let answer =  [ 2 ];

  expect(answer.Count(), result.Count());
  expect(result).toBeDefined();
  expect(answer).toBe(result);
}


function ListIntersection_Intersection_1_No_Overlap() {
  let A =  [ 1, 2, 3 ];
  let B =  [ 4, 5, 6 ];
  let result = intersection(A, B);
  let answer =  [  ];

  expect(answer.Count(), result.Count());
  expect(result).toBeDefined();
  expect(answer).toBe(result);
}


function ListIntersection_Intersection_1_Full_Overlap() {

  let A =  [ 1, 2, 3 ];
  let B =  [ 3, 2, 1 ];
  let result = intersection(A, B);
  let answer =  [ 1, 2, 3 ];

  expect(result).toBeDefined();
  expect(answer.Count(), result.Count());
  for(let i = 0; i < answer.Count(); i++) {
		 Assert.True(result.Contains(answer[i]));
  }
}


function ListIntersection_Intersection_1_Overlap() {

  let A =  [ 1, 2, 5 ];
  let B =  [ 0, 2, 1 ];
  let result = intersection(A, B);
  let answer =  [ 1, 2 ];

  expect(result).toBeDefined();
  expect(answer.Count(), result.Count());
  for(let i = 0; i < answer.Count(); i++) {
		 Assert.True(result.Contains(answer[i]));
  }
}


function ListIntersection_Intersection_2_Overlap() {

  let A =  [ 1, 2, 3, 8, 4 ];
  let B =  [ 4, 5, 6, 3, 7 ];
  let result = intersection(A, B);
  let answer =  [ 3, 4 ];

  expect(result).toBeDefined();
  expect(answer.Count(), result.Count());
  for(let i = 0; i < answer.Count(); i++) {
		 Assert.True(result.Contains(answer[i]));
  }
}


function ListIntersection_Intersection_Duplicate() {

  let A =  [ 1, 2, 3, 8, 4, 3 ];
  let B =  [ 4, 5, 6, 3, 7 ];
  let result = intersection(A, B);
  let answer =  [ 3, 4 ];

  expect(result).toBeDefined();
  expect(answer.Count(), result.Count());
  for(let i = 0; i < answer.Count(); i++) {
		 Assert.True(result.Contains(answer[i]));
  }
}

test('ListIntersection_Empty_Lists_Test', ListIntersection_Empty_Lists_Test);
test('ListIntersection_Single_Lists_Test', ListIntersection_Single_Lists_Test);
test('ListIntersection_Single_With_3_Elements_Each', ListIntersection_Single_With_3_Elements_Each);
test('ListIntersection_Intersection_1_No_Overlap', ListIntersection_Intersection_1_No_Overlap);
test('ListIntersection_Intersection_1_Full_Overlap', ListIntersection_Intersection_1_Full_Overlap);
test('ListIntersection_Intersection_1_Overlap', ListIntersection_Intersection_1_Overlap);
test('ListIntersection_Intersection_2_Overlap', ListIntersection_Intersection_2_Overlap);
test('ListIntersection_Intersection_Duplicate', ListIntersection_Intersection_Duplicate);
