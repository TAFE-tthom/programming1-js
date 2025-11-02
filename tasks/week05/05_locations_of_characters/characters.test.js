

const locationOfCharacters = require('./characters.js');


function procTest({ prefix, line, ch, expected }) {

  const name = `${prefix}, ${ch} in ${line}`;

  test(name, function() {

    const testLine = line;
    const testCh = ch;

    const testExpected = expected;
    const result = locationOfCharacters(testLine, testCh);
    
    expect(result).toEqual(testExpected);
    
  })
  
}


procTest({
  prefix: "locationsOfCharacters",
  line: "Hello",
  ch: 'l',
  expected: [2, 3]
})

procTest({
  prefix: "locationsOfCharacters - empty",
  line: "",
  ch: '',
  expected: []
})

procTest({
  prefix: "locationsOfCharacters - no line",
  line: "",
  ch: 'l',
  expected: []
})

procTest({
  prefix: "locationsOfCharacters - no ch",
  line: "Hello",
  ch: '',
  expected: []
})

procTest({
  prefix: "locationsOfCharacters",
  line: "Software",
  ch: 'w',
  expected: [4]
})

procTest({
  prefix: "locationsOfCharacters",
  line: "soaring software",
  ch: 's',
  expected: [0, 8]
})
