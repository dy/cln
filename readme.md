Clean source code before comparing fixtures.
To avoid leading/trailing/repeating whitespaces, newlines or tabs headache.

```js
var clean = require('cln')
var assert = require('assert')

assert.equal(
clean(compile(`
	float a = 1;
`)),
clean`
	var a = 1;
`;
```
