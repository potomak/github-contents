var nock = require('nock');
var should = require('should');
var gc = require('../lib/github_contents');

var github = nock('https://api.github.com')
  .get('/repos/owner/repo/contents/path')
  .reply(200, 'file contents');

describe('github_contents', function() {
  it('defines .get', function() {
    gc.get.should.be.a.Function;      
  });

  it('defines .simpleCallback', function() {
    gc.get.should.be.a.Function;      
  });

  describe('get', function() {
    it('returns file contents', function(done) {
      gc.get('owner', 'repo', 'path', gc.simpleCallback(function(contents) {
        contents.should.equal('file contents');
        done();
      }));
    });
  });
});