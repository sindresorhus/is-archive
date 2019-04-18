# is-archive [![Build Status](https://travis-ci.org/sindresorhus/is-archive.svg?branch=master)](https://travis-ci.org/sindresorhus/is-archive)

> Check if a filepath is an archive file


## Install

```
$ npm install is-archive
```


## Usage

```js
const isArchive = require('is-archive');

isArchive('src/unicorn.zip');
//=> true

isArchive('src/unicorn.txt');
//=> false
```


## Related

- [archive-extensions](https://github.com/arthurvr/archive-extensions) - List of archive file extensions


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
