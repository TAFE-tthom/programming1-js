#!/usr/bin/env node
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const __dirname = import.meta.dirname;
const fullpath = `${__dirname}/node_modules/vitest`

if(!fs.existsSync(fullpath)) {
  console.log("First-Run, getting dependencies");
  execSync(`cd ${__dirname} && npm install`);
}
import './node_modules/vitest/vitest.mjs'
