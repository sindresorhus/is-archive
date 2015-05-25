'use strict';
var path = require('path');
var archiveExtensions = require('archive-extensions');
var exts = Object.create(null);

archiveExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	return path.extname(filepath).slice(1).toLowerCase() in exts;
};
