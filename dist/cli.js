#!/usr/bin/env node
'use strict';
const version = require("../src/version");
const arg = process.argv.slice(2);

if (arg.indexOf('--version') !== -1
    || arg.indexOf('-v') !== -1){
    version.init();
}

