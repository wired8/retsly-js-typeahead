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
    .regex(['name', 'vendorID'])
    .template('<%- name %>')
    .run();

```


## License

(The MIT License)

Copyright (c) 2013 Retsly Software Inc <support@rets.ly>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
