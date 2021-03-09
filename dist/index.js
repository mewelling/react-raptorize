
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-raptorize-1.cjs.production.min.js')
} else {
  module.exports = require('./react-raptorize-1.cjs.development.js')
}
