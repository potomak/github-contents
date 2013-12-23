# GitHub Contents

Get contents from GitHub repos using HTTP API.

More details at [http://developer.github.com/v3/repos/contents/](http://developer.github.com/v3/repos/contents/).

## Example usage

```javascript
var gc = require('./index.js');

gc.get('potomak', 'CraftyComponents', 'package.json', function(res) {
  console.log(res.statusCode);
});

gc.get('potomak', 'CraftyComponents', 'package.json', gc.simpleCallback(function(content) {
  console.log(content)
}));
```