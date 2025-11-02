

const SequenceGenerator = require('./sequence.js');


function procTest({ name, makefn, expfns }) {

  const testName = `test_${name}`
  test(testName, function() {

    let sqn = makefn();

    for(const efn of expfns) {
      efn(sqn);
    }
    
  })
  
}

function testNext(sqn, expected) {
  expect(sqn.next()).toBe(expected)
}

function testCurrent(sqn, expected) {
  expect(sqn.current()).toBe(expected)
}
function testFinished(sqn, expected) {
  expect(sqn.finished()).toBe(expected)
}

procTest({
  name: 'Sequence_One_Arg_1',
  makefn: function() { return new SequenceGenerator(1); },
  expfns: [
    function(sqn) {
      testCurrent(sqn, 1);
      testNext(sqn, 1);
      testNext(sqn, 2);
      testNext(sqn, 3);
      testNext(sqn, 4);
    },
  ]
})

procTest({
  name: 'Sequence_Two_Arg_1',
  makefn: function() { return new SequenceGenerator(12, 2); },
  expfns: [
    function(sqn) {
      testCurrent(sqn, 12);
      testNext(sqn, 12);
      testNext(sqn, 14);
      testNext(sqn, 16);
      testNext(sqn, 18);
    },
  ]
})

procTest({
  name: 'Sequence_One_Arg_2',
  makefn: function() { return new SequenceGenerator(1); },
  expfns: [
    function(sqn) {
      testCurrent(sqn, 1);
      testNext(sqn, 1);
      testCurrent(sqn, 2);
      testNext(sqn, 2);
      testCurrent(sqn, 3);
      testNext(sqn, 3);
      testCurrent(sqn, 4);
      testNext(sqn, 4);
    },
  ]
})

procTest({
  name: 'Sequence_Two_Arg_2',
  makefn: function() { return new SequenceGenerator(1, 2); },
  expfns: [
    function(sqn) {
      testCurrent(sqn, 1);
      testNext(sqn, 1);
      testCurrent(sqn, 3);
      testNext(sqn, 3);
      testCurrent(sqn, 5);
      testNext(sqn, 5);
      testCurrent(sqn, 7);
      testNext(sqn, 7);
    },
  ]
})

procTest({
  name: 'Sequence_Three_Arg_1',
  makefn: function() { return new SequenceGenerator(10, 5, 30); },
  expfns: [
    function(sqn) {
      testNext(sqn, 10);
      testNext(sqn, 15);
      testNext(sqn, 20);
      testNext(sqn, 25);
      testNext(sqn, 30);
    },
  ]
})
procTest({
  name: 'Sequence_Three_Arg_1_Finished',
  makefn: function() { return new SequenceGenerator(10, 5, 30); },
  expfns: [
    function(sqn) {
      testNext(sqn, 10);
      testNext(sqn, 15);
      testNext(sqn, 20);
      testNext(sqn, 25);
      testNext(sqn, 30);
      testFinished(sqn, true);
    },
  ]
})
