
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
    this.u = [retsly.getHost(), url].join('');
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

  Typeahead.prototype.template = function(t) {
    this.t = t;
    return this;
  };

  Typeahead.prototype.run = function() {

    var _this = this;
    var t = _.template(this.t);

    this.ac = autocomplete(this.el, function(text, acb) {

      retsly.get(_this.u, _this.getQuery(text), function(res) {

        var bundle = _.map(res.bundle, function(i) {
          return [ t(i), i ];
        });

        acb(bundle);

      });

    });

    this.ac.on('select', function(e) {
      if(typeof _this.cb === 'function') {
        var u = [_this.u, e.meta._id].join('/');
        retsly.get(u, {}, function(res) {
          _this.cb(res.bundle);
        });
      }
    });

    $(this.ac.el).on('click', 'a', function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
    });

    return this;
  }

  return Typeahead;
}
