'use strict';
var test = require('ava');
var isArchive = require('./');

test(function (t) {
	t.assert(isArchive('unicorn.zip'));
	t.assert(isArchive('unicorn.tar'));
	t.assert(!isArchive('unicorn.jpg'));
	t.assert(!isArchive('unicornzip'));
	t.assert(!isArchive('unicorn.txt'));
	t.end();
});
