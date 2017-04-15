'use strict';
const pk = require('../package.json');

function init(){
    console.log(`${pk.name} - ${pk.description}`);
    console.log(`Version v${pk.version}`);
    process.exit(0);
}

exports.init = init;