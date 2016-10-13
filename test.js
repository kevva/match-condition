import test from 'ava';
import m from './';

test(t => {
	t.true(m('abc', true));
	t.true(m('abc', 'abc'));
	t.true(m('abc', /^abc$/));
	t.true(m('abc', '*bc'));
	t.false(m('abc', false));
	t.false(m('abc', 'dfg'));
	t.false(m('abc', /^dfg$/));
	t.false(m('abc', '!abc'));
	t.true(m('abc', x => x === 'abc'));
	t.false(m('abc', x => x === 'dfg'));
});
