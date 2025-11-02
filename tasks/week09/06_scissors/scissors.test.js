const fs = require('node:fs');
const readline = require('node:readline');
const scissors = require('./scissors.js');


async function ReadFileToArray(path) {
  const file = fs.createReadStream(path)
  const rl = readline.createInterface({
    input: file
  })
  const data = [];
  for await(const line of rl) {
    data.push(line);
  }
  return data;
}


function procTest({
  title,
  inputFile,
  columnIndex,
  expectedFile,
}) {

  test(title, async function() {

    const result = await scissors(inputFile, columnIndex);
    const expected = await ReadFileToArray(expectedFile);

    expect(result).toEqual(expected);
    
  })
}



procTest({
  title: 'dogs1',
  inputFile: 'dogs.txt',
  columnIndex: 1,
  expectedFile: 'dogs1.out'
})

procTest({
  title: 'dogs2',
  inputFile: 'dogs.txt',
  columnIndex: 2,
  expectedFile: 'dogs2.out'
})

procTest({
  title: 'dogs3',
  inputFile: 'dogs.txt',
  columnIndex: 3,
  expectedFile: 'dogs3.out'
})

procTest({
  title: 'dogs4',
  inputFile: 'dogs.txt',
  columnIndex: 4,
  expectedFile: 'dogs4.out'
})

procTest({
  title: 'cats1',
  inputFile: 'cats.txt',
  columnIndex: 1,
  expectedFile: 'cats1.out'
})

procTest({
  title: 'cats2',
  inputFile: 'cats.txt',
  columnIndex: 2,
  expectedFile: 'cats2.out'
})

procTest({
  title: 'cats3',
  inputFile: 'cats.txt',
  columnIndex: 3,
  expectedFile: 'cats3.out'
})

procTest({
  title: 'cats4',
  inputFile: 'cats.txt',
  columnIndex: 4,
  expectedFile: 'cats4.out'
})

