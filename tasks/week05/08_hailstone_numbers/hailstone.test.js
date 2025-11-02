
const hailstone = require('./hailstone.js');


function procTest({
  input,
  expected
}) {

  test(`hailstone(${input})`, function() {
    const result = hailstone(input);
    expect(result).toEqual(expected);
  });
}

procTest({
  input: 2,
  expected: [2, 1],
});

procTest({
  input: 3,
  expected: [3, 10, 5, 16, 8,  4, 2,  1],
});

procTest({
  input: 5,
  expected: [ 5, 16, 8, 4, 2, 1 ],
});

procTest({
  input: 11,
  expected: [
  11, 34, 17, 52, 26, 13,
  40, 20, 10,  5, 16,  8,
   4,  2,  1]
});

procTest({
  input: 19,
  expected: [
    19, 58, 29, 88, 44, 22, 11,
    34, 17, 52, 26, 13, 40, 20,
    10,  5, 16,  8,  4,  2,  1
  ],
})
