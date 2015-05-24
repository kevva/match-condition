'use strict';
var test = require('ava');
var matchCondition = require('./');

test(function (t) {
	t.assert(matchCondition('abc', true));
	t.assert(matchCondition('abc', 'abc'));
	t.assert(matchCondition('abc', /^abc$/));
	t.assert(matchCondition('abc', '*bc'));
	t.assert(!matchCondition('abc', false));
	t.assert(!matchCondition('abc', 'dfg'));
	t.assert(!matchCondition('abc', /^dfg$/));
	t.assert(!matchCondition('abc', '!abc'));

	t.assert(matchCondition('abc', function (val) {
		return val === 'abc';
	}));

	t.assert(!matchCondition('abc', function (val) {
		return val === 'dfg';
	}));

	t.end();
});
