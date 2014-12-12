
var AutoCompleteView = require('ampersand-autocomplete-view'),
    _ = require('underscore'),
    collection = require('ampersand-collection');

module.exports = exports = function(retsly) {

  if(typeof retsly === 'undefined') {
    throw new Error('retsly-js-typeahead requires an instantiated retsly object');
  }

  function Typeahead(el, cb) {
    if(!el.outerHTML.length) {
      throw new Error('retsly-js-typeahead could not find the specified dom element.');
    }
    this.q = {};
    this.el = el;
    this.cb = cb;
    return this;
  }

  Typeahead.prototype.url = function(url) {
    this.u = url;
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
  };

  Typeahead.prototype.template = function(t) {
    this.t = t;
    return this;
  };

  Typeahead.prototype.placeholder = function(ph) {
    this.ph = ph;
    return this;
  };

  Typeahead.prototype.run = function() {
    var self = this;
    var model = require('ampersand-state').extend({
      props: {
        id: ['string', true],
        name: ['string', true, '']
      }
    });

    var Collection = collection.extend({
      model: model,
      url: self.u,
      parse: function(res) {
        var bundle = _.map(res.bundle, function(i) {
          i.id = i._id;
          return i;
        });
        return bundle;
      },
      fetch: function(opts) {
        opts = opts ? _.clone(opts) : {};
        if (opts.parse === void 0) {
          opts.parse = true;
        }
        var success = opts.success;
        var collection = this;
        var q = self.getQuery(opts.data.name);
        retsly.get(self.u, q, function(res) {
          var method = opts.reset ? 'reset' : 'set';
          collection[method](res, opts);
          if (success) {
            success(collection, res, opts);
          }
        });
      }
    });

    this.ac = new AutoCompleteView({
      name: 'autocomplete',
      parent: self.el,
      options: new Collection(),
      queryKey: 'name',
      idAttribute: 'id',
      textAttribute: 'name',
      placeHolder: self.ph,
      minKeywordLength: 1,
      maxResults: 10,
      itemTemplate: self.t
    });

    return this;
  };

  return Typeahead;
};
