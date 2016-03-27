# binder-db
Functions for consistent database access across from all Binder modules

All Binder modules expect to have access to a writable MongoDB instance. The `db` service provided by `binder-control`, started with `binder-control start-service db` will launch a Docker container with a preconfigured Mongo instance (and configurable properties in `binder-control`).

All configuration options are in `conf/main.json`.
```
andrew@binder-api:~/binder-db$ cat conf/main.json
{
  "host": "localhost",
  "port": 9050,
  "db": "binder"
}
```

### install
```
npm install binder-db
```
### api
##### getDatabase(cb)
Returns a Mongoose db wrapper that's connected to the main Binder database
 - `cb` function - callback(err, db)

### usage
```
var getDatabase = require('binder-db')
getDatabase(function (err, db) {
  // register models with the db, etc.
})
```

### examples
```
var getDatabase = require('binder-db')
getDatabase(function (err, db) {
  self.db = db
  self.buildInfo = db.model('Build', BuildInfoSchema)
  self.templates = db.model('Templates', registry.TemplateSchema)
})
```

