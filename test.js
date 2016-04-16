import test from 'ava';
import matchCondition from './';

test(t => {
	t.true(matchCondition('abc', true));
	t.true(matchCondition('abc', 'abc'));
	t.true(matchCondition('abc', /^abc$/));
	t.true(matchCondition('abc', '*bc'));
	t.false(matchCondition('abc', false));
	t.false(matchCondition('abc', 'dfg'));
	t.false(matchCondition('abc', /^dfg$/));
	t.false(matchCondition('abc', '!abc'));

	t.true(matchCondition('abc', function (val) {
		return val === 'abc';
	}));

	t.false(matchCondition('abc', function (val) {
		return val === 'dfg';
	}));
});
