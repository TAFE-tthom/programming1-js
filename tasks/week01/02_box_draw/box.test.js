import { expect } from 'vitest';
import { TermTest } from 'sharedlib';


TermTest.Run(__dirname + '/box.js')
  .Test("Box - Basic Check", (buffer) => {
    const expected = [
      '*****',
      '*****',
      '*****',
      '*****',
      '*****',
      '*****',
    ];
    expect(buffer[0]).toEqual(expected[0]);
  });
