import {expectType} from 'tsd';
import isArchive = require('.');

expectType<boolean>(isArchive('src/unicorn.zip'));
