'use strict';
const path = require('path');
const archiveExtensions = require('archive-extensions');

const extensions = new Set(archiveExtensions);

module.exports = filepath => {
	return extensions.has(
		path
			.extname(filepath)
			.slice(1)
			.toLowerCase()
	);
};
