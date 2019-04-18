import test from 'ava';
import isArchive from '.';

test('main', t => {
	t.true(isArchive('unicorn.zip'));
	t.true(isArchive('unicorn.tar'));
	t.true(isArchive('unicorn.TAR'));
	t.false(isArchive('unicorn.jpg'));
	t.false(isArchive('unicornzip'));
	t.false(isArchive('unicorn.txt'));
});
