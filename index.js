
var $ = require('jquery')
  , _ = require('underscore')
  , autocomplete = require('autocomplete');

module.exports = exports = function(retsly) {

  function Typeahead(el, cb) {
    if(!$(el).length)
      throw new Error('retsly-js-typeahead could not find the specified dom element.');
    this.q = {};
    this.el = $(el)[0];
    this.cb = cb;
    return this;
  }

  Typeahead.prototype.url = function(url) {
    this.u = [
      'https://', retsly.getHost(), url,
    ].join('');
    return this;
  };

  Typeahead.prototype.query = function(q) {
    this.q = q;
    return this;
  };

  Typeahead.prototype.regex = function(regex) {
    this.r = regex;
    return this;
  };

  Typeahead.prototype.getQuery = function(val) {
    var _this = this;
    _this.q.$or = [];
    _.each(this.r, function(r) {
      var x = {};
      x[r] = { $regex: val, $options: 'i' };
      _this.q.$or.push(x);
    });
    this.q = _this.q;
    return this.q;
  }

  Typeahead.prototype.display = function(d) {
    this.d = d;
    return this;
  };

  Typeahead.prototype.run = function() {

    var _this = this;

    var ac = autocomplete(this.el, function(name, acb) {
      retsly.get(_this.u, _this.getQuery(name), function(res) {
        acb(
          _.map(res.bundle, function(v) {
            if(typeof _this.d === 'string')
              return v[_this.d]
            if(typeof _this.d === 'object') {
              return _.map(_this.d, function(x) {
                return v[x];
              }).join(' ');
            }
          })
        );
      });
    });

    $(ac.el).on('click', 'a', function(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      if(typeof _this.cb === 'function') {
        var q = _this.getQuery( $(_this.el).val() );
        q.limit = 1;
        retsly.get(_this.u, q, function(res) {
          _this.cb(res.bundle[0]);
        });
      }
    });

    return this;
  }

  return Typeahead;
}
