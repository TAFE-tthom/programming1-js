import { expect } from 'vitest';
import { TermTest } from 'sharedlib';


TermTest.Run(__dirname + '/hello.js')
  .Test("Hello World - Basic Check", (buffer) => {
    const expected = [
      'Hello World!',
    ];
    expect(buffer[0]).toEqual(expected[0]);
  });
