
const ArrayMap = require('./ArrayMap.js');


class MapState {
  constructor() {
    this.changeSet = [];
    this.results = [];
  }

  addChangeSet(changes) {
    this.changeSet.push(changes);
  }

  addResult(result) {
    this.results.push(result);
  }
  
}

function procTest({
  title,
  construct,
  operations,
  expectedops,
}) {

  test(`ArrayMap - ${title}`, function() {

    const mapstate = new MapState();
    let arrayMap = construct();

    for(const op of operations) {
      op(arrayMap, mapstate);
    }

    for(const eop of expectedops) {
      eop(arrayMap, mapstate);
    }
    
  })
}


function makeEmpty() {
  return function() { return new ArrayMap(); };
}

function makeWith({ keys,values }) {
  return function() { return ArrayMap.withArrays(keys, values); };
}

function setSingle({key, value}) {
  return function(amap, state) {
    amap.setElement(key, value);
    state.addChangeSet({
      keys: [...amap.keys()],
      values: [...amap.values()],
      results: []
    })
  }
}

function setMany({keys, values}) {
  return function(amap, state) {
    for(let i = 0; i < keys.length; i++) {
      amap.setElement(keys[i], values[i]);
    }
    state.addChangeSet({
      keys: [...amap.keys()],
      values: [...amap.values()],
      results: []
    })
  }
}

function deleteSingle({key}) {
  return function(amap, state) {
    amap.removeElement(key);
    state.addChangeSet({
      keys: [...amap.keys()],
      values: [...amap.values()],
      results: []
    })
  }
}

function deleteMany({keys}) {
  return function(amap, state) {
    for(let i = 0; i < keys.length; i++) {
      amap.removeElement(keys[i]);
    }
    state.addChangeSet({
      keys: [...amap.keys()],
      values: [...amap.values()],
      results: []
    })
  }
}

function getSingle({key}) {
  return function(amap, state) {
    let res = amap.getElement(key);
    state.addChangeSet({
      keys: [...amap.keys()],
      values: [...amap.values()],
      results: [res]
    })
  }
}

function testGetSingle({key, expected}) {
  return function(amap, _state) {
    let result = amap.getElement(key);
    expect(result).toEqual(expected);
  }
}


function testGetMany({keys, expected}) {
  return function(amap, _state) {
    for(let i = 0; i < keys.length; i++) {
      let result = amap.getElement(keys[i]);
      expect(result).toEqual(expected[i]);
    }
  }
}

//
// test cases below
// 

procTest({
  title: 'Single element',
  construct: makeEmpty(),
  operations: [
    setSingle({ key: 'Two', value: 2}),
  ],
  expectedops: [
    testGetSingle({ key: 'Two', expected: 2}),
  ]
})

procTest({
  title: 'Few elements',
  construct: makeEmpty(),
  operations: [
    setSingle({ key: 'Two', value: 2}),
    setSingle({ key: 'Three', value: 3}),
    setSingle({ key: 'Thirty', value: 30}),
  ],
  expectedops: [
    testGetSingle({ key: 'Two', expected: 2 }),
    testGetSingle({ key: 'Three', expected: 3}),
    testGetSingle({ key: 'Thirty', expected: 30}),
  ]
})
procTest({
  title: 'makeWith test',
  construct: makeWith({
    keys: ['Many', 'One'],
    values: ['A lot', 'Only 1']
  }),
  operations: [],
  expectedops: [
    testGetSingle({ key: 'Many', expected: 'A lot'}),
    testGetSingle({ key: 'One', expected: 'Only 1'}),
  ]
})

procTest({
  title: 'Many elements',
  construct: makeEmpty(),
  operations: [
    setMany({
      keys: ['Frog', 'Apple', 'Cat', 'Dog'],
      values: ['Croak', '', 'Meow', 'Bark']
    })
  ],
  expectedops: [
    testGetMany({
      keys: ['Apple', 'Cat'],
      expected: ['', 'Meow']
    })
  ]
})

procTest({
  title: 'Many elements with a delete',
  construct: makeEmpty(),
  operations: [
    setMany({
      keys: ['Frog', 'Apple', 'Cat', 'Dog'],
      values: ['Croak', '', 'Meow', 'Bark']
    }),
    deleteSingle({key: 'Dog'})
  ],
  expectedops: [
    testGetMany({
      keys: ['Apple', 'Cat', 'Dog'],
      expected: ['', 'Meow', null]
    })
  ]
})

procTest({
  title: 'Many elements, with a replace',
  construct: makeEmpty(),
  operations: [
    setMany({
      keys: ['Frog', 'Apple', 'Cat', 'Dog', 'Dog', 'Frog'],
      values: ['Croak', '', 'Meow', 'Bark', 'Woof', 'Rippit']
    })
  ],
  expectedops: [
    testGetMany({
      keys: ['Frog', 'Dog', 'Cat', 'Apple'],
      expected: ['Rippit', 'Woof', 'Meow', '']
    })
  ]
})
