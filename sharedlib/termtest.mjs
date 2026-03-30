import { test } from 'vitest';

export class TermTest {

  static ConsoleOut = console.log;
  
  constructor() {
    this.buffer = [];
    this.cout = TermTest.ConsoleOut;
    console.log = TermTest.ConsoleOutWrapper(this);
  }

  static ConsoleOutWrapper(tracker) {
    const wrapper = (...data) => {
      const args = data;
      tracker.buffer.push(args.toString());
      return tracker.cout(args);
    }
    return wrapper;
  }

  static Run(modname) {

    const tester = new TermTest();
    return {
      Test: (testname, testcb) => {
        test(testname, async () => {
          await import(modname);
          await testcb(tester.buffer)
        });
      }
    }
  } 

}
