'use strict';
const help =
`$ sculptor --help

Usage: sculptor [action] [directory] [<modfiers>]


  Actions:
    new [directory]      create a new Sculptor app

  Options:
    -h, --help           output usage information
    -V, --version        output the version number

`;

function init(){
    console.log(help);
    process.exit(1);
}

exports.init = init;