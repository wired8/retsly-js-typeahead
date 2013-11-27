
var $ = require('jquery')
  , _ = require('underscore')
  , autocomplete = require('autocomplete');

module.exports = exports = function(retsly) {

  return function(el, url, query, regex, key, cb) {

    if(!$(el).length)
      throw new Error('retsly-js-typeahead could not find the element.');

    params = (typeof params === 'undefined') ? {} : params;

    var url = [
      'https://',retsly.getHost(), url,
    ].join('');

    var ac = autocomplete($(el)[0], function(name, acb) {
      retsly.get(url, getQuery(name), function(res) {
        acb( _.map(res.bundle, function(v) { return v[key] }) );
      });
    });

    $(ac.el).on('click', 'a', function(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      if(typeof cb === 'function') {
        var q = getQuery( $(el).val() );
        q.limit = 1;
        retsly.get(url, q, function(res) {
          cb(res.bundle[0]);
        });
      }
    });

    function getQuery(val) {
      query.$or = [];
      _.each(regex, function(r) {
        var x = {};
        x[r] = { $regex: val, $options: 'i' };
        query.$or.push(x);
      });
      return query;
    }
  }

}
