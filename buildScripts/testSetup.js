//This file is not transpiled, so must use CommonJs and ES5

//Register babel to transpile before our tests run.
require('babel-register')();

//Disable webpack features thta Mocha doesn't understand.
require.extensions['.css'] = function() {};
