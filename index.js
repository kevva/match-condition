'use strict';
var isGlob = require('is-glob');
var isRegex = require('is-regex');
var micromatch = require('micromatch');

module.exports = function (val, condition) {
	if (typeof condition === 'boolean') {
		return condition;
	}

	if (typeof condition === 'function') {
		return condition(val) === true;
	}

	if (isRegex(condition)) {
		return condition.test(val);
	}

	if (isGlob(condition)) {
		return micromatch.isMatch(val, condition);
	}

	return val === condition;
};
