var assert = require('assert')

describe('getDatabase', function () {
  beforeEach(function () {
    exports.getDatabase = null
  })

  it('should connect to an existing database and return the \'binder\' db', function (done) {
    var getDatabase = require('../index.js').getDatabase
    getDatabase(function (err, conn) {
      if (err) throw err
      assert.equal(conn.name, 'binder')
      done()
    })
  })

  it('should throw an error if the MongoDB connection fails', function (done) {
    var getDatabase = require('../index.js').getDatabase
    var config = {
      host: 'blah',
      port: 27017,
      db: 'binder'
    }
    var opts = {}
    opts.config = config
    getDatabase(opts, function (err, conn) {
      assert.notEqual(err, undefined)
      done()
    })
  })
})
