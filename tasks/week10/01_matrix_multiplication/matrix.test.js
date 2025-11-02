const MatrixMultiplication = require('./matrix.js');
const fs = require('node:fs');
const readline = require('node:readline');


function lineToDims(line) {
  let spl = line.split(' ');
  let dims = [];
  if(spl.length !== 4) {

    return [];
  } else {
  
    for(let i = 0; i < spl.length; i++) {
      let c = parseInt(spl[i]);
      dims.push(c);
    }

    return dims;
  }
}

async function InterpretOutput(path) {
  
  const file = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: file
  })
  const mat = []
  const row = [];
  for await(const line of rl) {
    const spl = line.split(' ');
    for(let i = 0; i < spl.length; i++) {
      row.push(parseInt(spl[i]));
    }

    mat.push(row);
  }

  return mat;
}

async function InterpretInput(path) {
  const matA = [];
  const matB = [];

  const file = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: file
  })

  let i = 0;
  let dims = [];
  let matADims = [0, 0];
  let matBDims = [0, 0];
  
  for await(const line of rl) {
    if(i == 0) {
      dims = lineToDims(line);
      if(dims !== 4) {
        return {
          valid: false,
        };
      } else {
        matADims = [dims[0], dims[1]];
        matBDims = [dims[2], dims[3]];
      }
    } else if(i >= 1 && i < 1 + matADims[1]) {
      const spl = line.split(' ');
      const row = [];
      for(let i = 0; i < spl.length; i++) {
        row.push(parseInt(spl[i]));
      }

      matA.push(row);
    } else {
      const spl = line.split(' ');
      const row = [];
      for(let i = 0; i < spl.length; i++) {
        row.push(parseInt(spl[i]));
      }

      matB.push(row);
    }

    i++;
  }
  if(matBDims[1] == (i-1-matADims[1])) {
    
  
    return {
      valid: true,
      matA,
      matB
    }
  } else {
    return {
      valid: false
    }
  }
}


function procTest({
  title,
  inputPath,
  expectedPath,
}) {

  test(title, async function() {

    const inputMatrices = await InterpretInput(inputPath);
    const expectedMatrices = await InterpretOutput(expectedPath);

    const result = MatrixMultiplication(inputMatrices.matA, inputMatrices.matB);

    expect(result).toEqual(expectedMatrices);
    
  })
  
}

procTest({
  title: 'square matrix',
  inputPath: './tests/testSquare.in',
  expectedPath: './tests/testSquare.out',
})

procTest({
  title: 'thin matrix',
  inputPath: './tests/testThin.in',
  expectedPath: './tests/testThin.out',
})

procTest({
  title: 'example matrix',
  inputPath: './tests/givenExampleTest.in',
  expectedPath: './tests/givenExampleTest.out',
})
