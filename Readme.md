
# retsly-js-typeahead

  A typeahead component built on the Retsly API.

## Installation

  Install with [component.io](http://github.com/component/component):

    $ component install Retsly/retsly-js-typeahead

## API

```javascript

  var Retsly = require('retsly-js-sdk');
  var retsly = new Retsly(YOUR_CLIENT_ID, { debug: true });

  var Typeahead = require('retsly-js-typeahead')(retsly);
  var t = new Typeahead(el, fn)
    .url('/api/v1/vendor')
    .query({ type: 'mls' })
    .regex(['name', 'vendor_id'])
    .display('name')
    .run();

```


## License

  MIT
