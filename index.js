'use strict';
const isGlob = require('is-glob');
const isRegex = require('is-regex');
const micromatch = require('micromatch');

module.exports = (val, condition) => {
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
