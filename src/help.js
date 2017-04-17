'use strict';
const help =
`$ sculptor --help

  Usage: sculptor [action] [directory] [<modfiers>]


  Actions:
    new, init [directory]                create a new Sculptor app
    watch, w [<source>][<directory>]  watch files or directories for changes


  Options:
    -h, --help                 output usage /information
    -V, --version              output the version number

`;

function init(){
    console.log(help);
    process.exit(1);
}
function check(arg){
    return (arg.indexOf('--help') !== -1 || arg.indexOf('-v') !== -1);
}

exports.init = init;
exports.check = check;
