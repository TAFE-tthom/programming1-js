import { expect } from 'vitest';
import { TermTest } from 'sharedlib';


TermTest.Run(__dirname + '/triangle.js')
  .Test("Triangle - Basic Check", (buffer) => {
    const expected = [
      '   *   ',
      '  ***  ',
      ' ***** ',
      '*******',
    ];
    expect(buffer[0]).toEqual(expected[0]);
  });
