

const mostCommon = require('./most_common.js');


function containsCheck(listA, listB) {

  if(listA.length !== listB.length) {
    fail("The result does not match the expected length");
  } else {
    for(let i = 0; i < listA.length; i++) {
      if(!listB.includes(listA[i])) {
        fail("An entry in this list is not in the expected list");
      }
    }
  }
  
}

test('most common, empty array', function() {
  let words = [];
  let expected = [];
  let result = mostCommon(words);
  containsCheck(result, expected);

});

test('most common, 3 words', function() {
  let words = ['One', 'Two', 'Three'];
  let expected = ['One', 'Two', 'Three'];
  let result = mostCommon(words);
  containsCheck(result, expected);

});
test('most common, 5 common', function() {
  let words = [
    'One', 'Two', 'Three', 'One', 'Three',
    'Four', 'Five', 'Six', 'Six', 'Four',
    'Two', 'Three'
  ];
  let expected = ['One', 'Three', 'Two', 'Four', 'Six'];
  let result = mostCommon(words);
  containsCheck(result, expected);

});
test('most common, 5 words', function() {
  let words = ['One', 'Two', 'Three', 'Four', 'Five'];
  let expected = ['One', 'Two', 'Three', 'Four', 'Five'];
  let result = mostCommon(words);
  containsCheck(result, expected);

});
test('most common, 1', function() {
  let words = ['Two'];
  let expected = ['Two'];
  let result = mostCommon(words);
  containsCheck(result, expected);

});
