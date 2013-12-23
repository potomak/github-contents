var https = require('https');
var pjson = require('../package.json');

exports.get = function(owner, repo, path, ref, callback) {
  if (typeof ref == 'function' && typeof callback == 'undefined') {
    callback = ref;
    ref = null;
  }

  return https.get(options(pathFromParams(owner, repo, path, ref)), callback);
};

exports.simpleCallback = function(callback) {
  return function(response) {
    var content = '';

    response.on('data', function(chunk) {
      content += chunk;
    });

    response.on('end', function() {
      callback(content);
    });
  };
};

var pathFromParams = function(owner, repo, path, ref) {
  var reqPath = '/repos/' + owner + '/' + repo + '/contents/' + path;

  if (typeof ref != 'undefined' && ref != null) {
    reqPath += '?ref=' + ref;
  }

  return reqPath;
};

var options = function(path) {
  return {
    hostname: 'api.github.com',
    path: path,
    headers: {
      'User-Agent': 'github-contents-package ' + pjson.version,
      'Accept': 'application/vnd.github.VERSION.raw'
    }
  };
};