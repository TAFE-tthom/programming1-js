

const searchArray = require('./Search.js');


function procTest({
  title,
  array,
  objToFind,
  compfn,
  expected
}) {

  test(`searchArray test - ${title}`, function() {
    let result = searchArray(array, objToFind, compfn);
    expect(result).toEqual(expected);
  });
  
}


procTest({
  title: 'Single element array',
  array: [
    10
  ],
  objToFind: 10,
  compFn: (a, b) => { return a === b; },
  expected: 10
});

procTest({
  title: '3 elements array',
  array: [
    10,
    20,
    5
  ],
  objToFind: 5,
  compFn: (a, b) => { return a === b; },
  expected: 5
});

procTest({
  title: '3 elements array - Not found',
  array: [
    10,
    20,
    5
  ],
  objToFind: 7,
  compFn: (a, b) => { return a === b; },
  expected: null
});

procTest({
  title: '3 elements array - strings',
  array: [
    'Ten',
    'Twenty',
    'Fifty',
  ],
  objToFind: 'Twenty',
  compFn: (a, b) => { return a.localeCompare(b) === 0; },
  expected: 'Twenty'
});

procTest({
  title: '5 elements array - strings',
  array: [
    'Ten',
    'Twenty',
    'Fifty',
    'Jolly',
    'Victory'
  ],
  objToFind: 'Jolly',
  compFn: (a, b) => { return a.localeCompare(b) === 0; },
  expected: 'Jolly'
});

procTest({
  title: '3 elements array - Objects',
  array: [
    { name: 'Jace', registration: '112233' },
    { name: 'Kelly', registration: '991133' },
    { name: 'Billy', registration: '112235' },
  ],
  objToFind: { name: 'Billy', registration: '112235' },
  compFn: (a, b) => { return a.name.localeCompare(b.name) === 0
    && a.registration.localeCompare(b.registration); },
  expected: { name: 'Billy', registration: '112235' }
});

procTest({
  title: '3 elements array - Objects - Not Found 1',
  array: [
    { name: 'Jace', registration: '112233' },
    { name: 'Kelly', registration: '991133' },
    { name: 'Billy', registration: '112235' },
  ],
  objToFind: { name: 'Billy', registration: '112299' },
  compFn: (a, b) => { return a.name.localeCompare(b.name) === 0
    && a.registration.localeCompare(b.registration); },
  expected: null
});

procTest({
  title: '3 elements array - Objects - Not Found 2',
  array: [
    { name: 'Jace', registration: '112233' },
    { name: 'Kelly', registration: '991133' },
    { name: 'Billy', registration: '112235' },
  ],
  objToFind: { name: 'James', registration: '112235' },
  compFn: (a, b) => { return a.name.localeCompare(b.name) === 0
    && a.registration.localeCompare(b.registration); },
  expected: null
});
