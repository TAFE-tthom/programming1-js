


const computeAverage = require('./average.js');

function procTest({ prefix, input, expected }) {
  const name = `${prefix}, ${input}`;
  test(name, function() {

    let test_input = input;

    let test_expected = expected
    let result = computeAverage(test_input);

    expect(result).toBeCloseTo(test_expected);
  });
  
}

procTest({
  prefix: "average",
  input: [],
  expected: 0
});


procTest({
  prefix: "average",
  input: [1],
  expected: 1
});

procTest({
  prefix: "average",
  input: [2, 4],
  expected: 3
});

procTest({
  prefix: "average",
  input: [2, 3],
  expected: 2.5
});

procTest({
  prefix: "average",
  input: [0, 2, 4, 6, 8, 10],
  expected: 5
});

procTest({
  prefix: "average",
  input: [-5, -2.5, 0, 1, 1.25],
  expected: -1.05
});
