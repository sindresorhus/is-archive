/**
Check if a filepath is an archive file.

@example
```
import isArchive = require('is-archive');

isArchive('src/unicorn.zip');
//=> true

isArchive('src/unicorn.txt');
//=> false
```
*/
declare function isArchive(filepath: string): boolean;

export = isArchive;
