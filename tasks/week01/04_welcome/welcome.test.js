import { expect } from 'vitest';
import { TermTest } from 'sharedlib';


TermTest.Run(__dirname + '/welcome.js')
  .Test("Welcome - Basic Check", (buffer) => {

    const components = buffer[0].split(" ", 2);
    const actualPrefix = components[0];
    const actualSuffix = components[1];
    
    
    const prefix = "Hello";
    const suffixLength = 1;
    expect(actualPrefix).toEqual(prefix);
    expect(actualSuffix.length).toBeGreaterThanOrEqual(suffixLength);
  });
