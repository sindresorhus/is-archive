'use strict';
const path = require('path');
const archiveExtensions = require('archive-extensions');

const extensions = new Set(archiveExtensions);

module.exports = filePath => {
	return extensions.has(
		path
			.extname(filePath)
			.slice(1)
			.toLowerCase()
	);
};
