

const findWord = require('./word_searcher.js');


test('findWord, [one, two], one', function() {

  let words = ['one', 'two'];
  let w = 'one';

  let res = findWord(words, w);

  expect(res).toEqual('one');
  
})
test('findWord, [Jeff, Alice, Kelly], ', function() {

  let words = ['Jeff', 'Alice', 'Kelly'];
  let w = 'Kelly';

  let res = findWord(words, w);

  expect(res).toEqual('Kelly');
  
})
test('findWord, [one, two],', function() {

  let words = ['one', 'two'];
  let w = 'three';

  let res = findWord(words, w);

  expect(res).toEqual(null);

  
})
test('findWord, [wall, room, door, roof], ', function() {

  let words = ['wall', 'room', 'door', 'roof'];
  let w = 'door';

  let res = findWord(words, w);

  expect(res).toEqual('door');
  
})
