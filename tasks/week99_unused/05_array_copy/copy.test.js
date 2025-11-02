

const arrayCopy = require("./copy.js");


function procTest({ prefix, buf, prefixOps, ops, expected }) {

  const testName = `${prefix}, ${prefixOps} - NOPS: ${ops.length}`;

  test(testName, function(){

    const buffer = buf;

    for(const fn of ops) {
      fn(buffer)
    }

    expect(buffer).toEqual(expected);
    
  });
  
}


procTest({
  prefix: "array_1, 0, 1",
  buf: [0],
  prefixOps: '1 Operation(s)',
  ops: [
    function(buffer) {
      arrayCopy(buffer, [5], 0, 1);
    }
  ],
  expected: [5]
})

procTest({
  prefix: "array_3, 0, 3",
  buf: [0, 0, 0],
  prefixOps: '1 Operation(s)',
  ops: [
    function(buffer) {
      arrayCopy(buffer, [1, 2, 3], 0, 3);
    }
  ],
  expected: [1, 2, 3]
})

procTest({
  prefix: "array_3, 1, 3",
  buf: [0, 0, 0],
  prefixOps: '1 Operation(s)',
  ops: [
    function(buffer) {
      arrayCopy(buffer, [1, 2, 3], 1, 3);
    }
  ],
  expected: [2, 3, 0]
})

procTest({
  prefix: "array_5, [0, 5], [0, 3]",
  buf: [0, 0, 0, 0, 0],
  prefixOps: '2 Operation(s)',
  ops: [
    function(buffer) {
      arrayCopy(buffer, [6, 7, 8, 9, 1], 0, 5);
    },
    function(buffer) {
      arrayCopy(buffer, [9, 8, 11], 0, 3);
    }
  ],
  expected: [9, 8, 11, 9, 1]
})

procTest({
  prefix: "array_6, [0, 6], [4, 2]",
  buf: [0, 0, 0, 0, 0],
  prefixOps: '1 Operation(s)',
  ops: [
    function(buffer) {
      arrayCopy(buffer, [1, 2, 3, 4, 5, 6], 0, 6);
    },
    function(buffer) {
      arrayCopy(buffer, [1, 2, 3, 4, 5, 6], 4, 2);
    },
  ],
  expected: [5, 6, 3, 4, 5, 6]
})
