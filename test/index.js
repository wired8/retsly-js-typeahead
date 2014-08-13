
/**
 * Dependencies
 */
var assert = require('assert');
var Retsly = require('retsly-sdk');

// don't log debugs
Retsly.debug = false;
// TODO luke temp maybe
Retsly.getDomain = function () { return 'http://stg.rets.io:4001' };


/**
 * Tests
 */

suite('Typeahead')
test('cannot be required without instantiated retsly', function() {
  assert.throws(function() {
    require('retsly-typeahead')()
  });
});

test('can be required with an instantiated retsly', function() {
  assert.doesNotThrow(function() {
    var r = Retsly.create('xxx','xxx');
    require('retsly-typeahead')(r);
  });
});

suite('Typeahead#constructor');
test('cannot be instantiated without an el', function() {
  assert.throws(function() {
    var r = Retsly.create('xxx','xxx');
    var T = require('retsly-typeahead')(r);
    var t = new T();
  });
});

test('can be instantiated with an el', function() {
  assert.doesNotThrow(function() {
    var r = Retsly.create('xxx','xxx');
    var T = require('retsly-typeahead')(r);
    var t = new T({});
  });
});

suite('Typeahead#url');
test('builds an https api url properly', function() {
  var r = Retsly.create('xxx','xxx');
  var T = require('retsly-typeahead')(r);
  var t = new T({});
  assert.equal(t.url('/api/v1/listing/sandicor.json').u,'https://rets.io:443/api/v1/listing/sandicor.json');
});
