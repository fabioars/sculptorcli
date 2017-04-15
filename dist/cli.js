#!/usr/bin/env node
'use strict';

const actions = [
    require('../src/main'),
    require('../src/watch'),
    require('../src/version'),
    require('../src/help'),
];

const arg = process.argv.slice(2);

if(arg.length == 0){
    require('../src/help').init();
    process.exit(1);
}

actions.forEach(function(action){
    if(action.check(arg)){
        action.init(arg);
    }
});

