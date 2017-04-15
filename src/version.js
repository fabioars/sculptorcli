'use strict';
const pk = require('../package.json');

function init(){
    console.log(`${pk.name} - ${pk.description}`);
    console.log(`Version v${pk.version}`);
    process.exit(0);
}
function check(arg){
    return (arg.indexOf('--version') !== -1 || arg.indexOf('-v') !== -1);
}

exports.init = init;
exports.check = check;