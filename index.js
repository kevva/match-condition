'use strict';
var isRegex = require('is-regex');

module.exports = function (val, condition) {
	if (typeof condition === 'boolean') {
		return condition;
	}

	if (typeof condition === 'function') {
		return condition(val) ? true : false;
	}

	if (isRegex(condition)) {
		return condition.test(val);
	}

	return val === condition;
};
