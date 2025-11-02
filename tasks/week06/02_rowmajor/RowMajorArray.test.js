
const RowMajorArray = require('./RowMajorArray.js');


function procTest({ prefix, input, ops, expected }) {
  let opNames = '';
  
  ops.forEach((e) => opNames += `[${e.name}],` );
  const testName = `${prefix}, ${input}, ${opNames}, ${expected}`;
  test(testName, function() {
    //TODO: Finish this

    const testExpected = expected;
    const w = input.width;
    const h = input.height;
    
    let rma = new RowMajorArray(w, h);

    for(const op of ops) {
      const fn = op.fn;
      fn(rma);
    }

    expect(rma.getArray()).toEqual(testExpected);
      
  });
}


procTest({
  prefix: 'RowMajorArray, 1x1',
  input: {
    width: 1,
    height: 1,
  },
  ops: [
    {
      name: 'change single',
      fn: function(rma) {
        rma.setElement(0, 0, 10);
      }
    }
  ],
  expected: [10]
})

procTest({
  prefix: 'RowMajorArray, 2x2',
  input: {
    width: 2,
    height: 2,
  },
  ops: [
    {
      name: 'change two',
      fn: function(rma) {
        rma.setElement(0, 0, 10);
        rma.setElement(1, 0, 20);
      }
    }
  ],
  expected: [10, 20, 0, 0]
})

procTest({
  prefix: 'RowMajorArray, 2x2',
  input: {
    width: 2,
    height: 2,
  },
  ops: [
    {
      name: 'change three',
      fn: function(rma) {
        rma.setElement(0, 0, 10);
        rma.setElement(0, 1, 20);
        rma.setElement(1, 1, 30);
      }
    }
  ],
  expected: [10, 0, 20, 30]
})

procTest({
  prefix: 'RowMajorArray, 4x4',
  input: {
    width: 4,
    height: 4,
  },
  ops: [
    {
      name: 'change first row',
      fn: function(rma) {
        rma.setElement(0, 0, 10);
        rma.setElement(1, 0, 10);
        rma.setElement(2, 0, 10);
        rma.setElement(3, 0, 10);
      }
    },
    {
      name: 'change second row',
      fn: function(rma) {
        rma.setElement(0, 1, 20);
        rma.setElement(1, 1, 20);
        rma.setElement(2, 1, 20);
        rma.setElement(3, 1, 20);
      }
    },
    {
      name: 'change third row',
      fn: function(rma) {
        rma.setElement(0, 2, 30);
        rma.setElement(1, 2, 30);
        rma.setElement(2, 2, 30);
        rma.setElement(3, 2, 30);
      }
    },
    {
      name: 'change fourth row',
      fn: function(rma) {
        rma.setElement(0, 3, 40);
        rma.setElement(1, 3, 40);
        rma.setElement(2, 3, 40);
        rma.setElement(3, 3, 40);
      }
    },
  ],
  expected: [10, 10, 10, 10, 20, 20, 20, 20, 30, 30, 30, 30, 40, 40, 40, 40]
})
