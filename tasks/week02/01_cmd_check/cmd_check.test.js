import { cmdcheck } from './cmd_check';
import { test, expect } from 'vitest'

test('CommandCheck, OK!', function() {

  let res = cmdcheck();

  expect(res).toEqual("OK!")
})
