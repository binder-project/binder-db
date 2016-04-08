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
})
