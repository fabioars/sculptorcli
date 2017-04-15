'use strict';
const fs = require('fs');
const shelljs = require('shelljs');
const git = {
    sculptor: 'https://github.com/1fabiosoares/sculptor.git'
};

function init(arg){
    if(!shelljs.which('git')){
        console.error('[Error] Sorry, but Sculptor CLI requires git');
        process.exit(1);
    }
    const directory = arg[1] || 'sculptorApplication';
    if(fs.existsSync(directory)){
        console.warn('[Warning] This directory already exists.');
        process.exit(1);
    }
    console.log(`Starting a new Sculptor Application on ${directory}`);
    shelljs.exec(`git clone ${git.sculptor} ${directory}`);
    console.log(`Application started`);
    shelljs.exec(`rm -rf ${directory}/.* 2> /dev/null`);
    shelljs.exec(`rm -rf ${directory}/*.json`);
    console.log(`Unnecessary stuff removed`);
    console.log(`Now is good to go :)`);
    process.exit(1);
}

exports.init = init;