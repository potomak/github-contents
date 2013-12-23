# GitHub Contents

Get contents from GitHub repos using HTTP API.

More details at [http://developer.github.com/v3/repos/contents/](http://developer.github.com/v3/repos/contents/).

## Example usage

```javascript
var gc = require('./index.js');

gc.get('potomak', 'CraftyComponents', 'package.json', function(res) {
  console.log(res.statusCode);
});
```

Use `gc.simpleCallback` to get direct access to file contents:

```javascript
var callback = gc.simpleCallback(function(contents) {
  console.log(contents);
});

gc.get('potomak', 'CraftyComponents', 'package.json', callback);
```