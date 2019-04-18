/**
Check if a file path is an archive file.

@example
```
import isArchive = require('is-archive');

isArchive('source/unicorn.zip');
//=> true

isArchive('source/unicorn.txt');
//=> false
```
*/
declare function isArchive(filePath: string): boolean;

export = isArchive;
