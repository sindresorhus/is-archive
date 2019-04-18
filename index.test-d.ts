import {expectType} from 'tsd';
import isArchive = require('.');

expectType<boolean>(isArchive('source/unicorn.zip'));
