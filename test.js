var clean = require('./');
var assert = require('assert');

assert.equal(clean(`
	/*
	unicorn
		cake
*/
`),
`/*
unicorn
cake
*/`);