import test from 'ava';
import m from './';

test(t => {
	t.true(m('unicorn.zip'));
	t.true(m('unicorn.tar'));
	t.true(m('unicorn.TAR'));
	t.false(m('unicorn.jpg'));
	t.false(m('unicornzip'));
	t.false(m('unicorn.txt'));
});
