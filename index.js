var fs = require('fs')
var path = require('path')
var mongoose = require('mongoose')

// TODO : are there any schemas that can be validated with mongoose in binder-db?

/**
 * Creates a connection to the main Binder MongoDB database
 *
 * @param {object} opts - object containing config specification
 * @param {function} cb - callback(err, connection)
 */
var getDatabase = function (config, cb) {
  if (typeof config === 'function') {
    cb = config
    config = {}
  }
  var makeConn = function (config) {
    var url = 'mongodb://' + config.host
    if (config.port) {
      url = url + ':' + config.port
    }
    var db = mongoose.createConnection(url + '/' + config.db)
    db.on('error', function (err) {
      return cb(err)
    })
    db.once('open', function () {
      return cb(null, db)
    })
  }
  if (!config || !config.host) {
    fs.readFile(path.join(process.env['HOME'], '.binder/db.conf'), function (err, text) {
      if (err) return cb(err)
      makeConn(JSON.parse(text))
    })
  } else {
    makeConn(config)
  }
}

module.exports = {
  getDatabase: getDatabase
}
