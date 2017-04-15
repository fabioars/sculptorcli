#!/usr/bin/env node
'use strict';
const main    = require('../src/main');
const version = require('../src/version');
const help    = require('../src/help');
const arg = process.argv.slice(2);

if(arg.indexOf('new') !== -1
    || arg.indexOf('init') !== -1){
    main.init(arg);
}else if(arg.indexOf('--version') !== -1
    || arg.indexOf('-v') !== -1){
    version.init();
}
else if(arg.indexOf('--help') !== -1
    || arg.indexOf('-v') !== -1){
    help.init();
}
else{
    help.init();
}

