Clean source code before comparing fixtures.
To avoid leading/trailing/repeating whitespaces, newlines or tabs headache.

```js
var clean = require('cln');

assert.equal(
clean(compile(`
	float a = 1;
`)),
clean(`
	var a = 1;
`));
```
