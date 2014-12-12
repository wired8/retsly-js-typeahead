var Retsly = require('retsly-js-sdk');
var retsly = new Retsly('LhBv616CKzcUtdplacAX', 'equQdiFWClMpvkDfTxouK6S2f24zG5lN');
var Typeahead = require('../ampersand')(retsly);

var fn = function() {
  console.log('woot!');
};

document.addEventListener('DOMContentLoaded', function () {

  /* Override getDomain for demo */
  retsly.getDomain = function () {
    return 'https://dev.rets.io:443';
  };

  var t = new Typeahead(document.getElementById('foobar'), fn)
      .url('/api/v1/vendor')
      .query({ type: 'mls' })
      .regex(['name', 'vendorID'])
      .placeholder('Please choose a value')
      .template('<a data-hook="id"><span>Item: </span><span data-hook="name"></span></a>')
      .run();

  document.querySelector('body').appendChild(t.ac.el);
});


