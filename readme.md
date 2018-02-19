# match-condition [![Build Status](https://travis-ci.org/kevva/match-condition.svg?branch=master)](https://travis-ci.org/kevva/match-condition)

> Check if a value matches a condition


## Install

```
$ npm install match-condition
```


## Usage

```js
const matchCondition = require('match-condition');

matchCondition('unicorns', 'unicorns');
//=> true

matchCondition('unicorns', /^unicorns$/);
//=> true

matchCondition('unicorns', '*corns');
//=> true

matchCondition('unicorns' val => val === 'unicorns');
//=> true
```


## API

### matchCondition(value, condition)

#### value

Type: `string` `number`

Value to be matched.

#### condition

Type: `Function` `string` `boolean` `RegExp`

Condition to match the value against.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
