
/**
 * Dependencies
 */
var assert = require('assert');
var Retsly = require('retsly-js-sdk');

// don't log debugs
Retsly.debug = false;
Retsly.getDomain = function () { return 'http://stg.rets.io:4001' };

describe('retsly-js-typeahead', function () {

  it('cannot be required without instantiated retsly', function () {
    assert.throws(function () {
      require('../ampersand.js')()
    });
  });

  it('can be required with an instantiated retsly', function () {
    assert.doesNotThrow(function () {
      var r = Retsly.create('xxx', 'xxx');
      require('../ampersand.js')(r);
    });
  });

  it('cannot be instantiated without an el', function () {
    assert.throws(function () {
      var r = Retsly.create('xxx', 'xxx');
      var T = require('../ampersand.js')(r);
      var t = new T();
    });
  });

  it('can be instantiated with an el', function () {
    assert.doesNotThrow(function () {
      var r = Retsly.create('xxx', 'xxx');
      var T = require('../ampersand.js')(r);
      var t = new T(document.body);
    });
  });

});

