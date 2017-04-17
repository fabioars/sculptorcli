#!/usr/bin/env node
'use strict';

const actions = [
    require('../src/main'),
    require('../src/watch'),
    require('../src/version'),
    require('../src/help')
];

const arg = process.argv.slice(2);
const valid = false;

actions.forEach(function(action){
    if(action.check(arg)){
        action.init(arg);
        valid = true
        return;
    }
});

if(arg.length == 0 || !valid){
    require('../src/help').init();
    process.exit(1);
}
