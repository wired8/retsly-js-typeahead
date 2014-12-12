# retsly-js-typeahead [![wercker status](https://app.wercker.com/status/4ee7eee158d00030709f3b75b0cc7c95/s/ "wercker status")](https://app.wercker.com/project/bykey/4ee7eee158d00030709f3b75b0cc7c95)

  A typeahead component built on the Retsly API.

## Installation

  Install with [component.io](http://github.com/component/component):

  ```bash
  $ component install Retsly/retsly-js-typeahead
  ```

  Install with [npm](http://github.com/Retsly/retsly-js-auth):

  ```bash
  $ npm install retsly-js-typeahead
  ```
## component API

```javascript

  var Retsly = require('retsly-js-sdk');
  var retsly = new Retsly(CLIENT_ID, BROWSER_TOKEN);

  var Typeahead = require('retsly-typeahead')(retsly);
  var t = new Typeahead(el, fn)
    .url('/api/v1/vendor')
    .query({ type: 'mls' })
    .regex(['name', 'vendorID'])
    .template('<%- name %>')
    .run();

```

## browserify API

  The browserify version of the typeahead control differs in that it uses [ampersandjs](https://ampersandjs.com/learn/templates) template views rather than underscorejs.

```javascript

   var Retsly = require('retsly-js-sdk');
   var retsly = new Retsly(CLIENT_ID, BROWSER_TOKEN);

   var Typeahead = require('retsly-typeahead')(retsly);
   var t = new Typeahead(el, fn)
     .url('/api/v1/vendor')
     .query({ type: 'mls' })
     .regex(['name', 'vendorID'])
     .placeholder('Please choose a value')
     .template('<a data-hook="id"><span data-hook="name"></span></a>')
     .run();
```

## browserify demo

```bash

   npm install
   npm run demo
   open browser -> http://localhost:9966/

```




## License

(The MIT License)

Copyright (c) 2015 Retsly Software Inc <support@rets.ly>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
