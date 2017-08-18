## :dash: :dash: **The Binder Project is moving to a [new repo](https://github.com/jupyterhub/binderhub).** :dash: :dash:

:books: Same functionality. Better performance for you. :books:

Over the past few months, we've been improving Binder's architecture and infrastructure. We're retiring this repo as it will no longer be actively developed. Future development will occur under the [JupyterHub](https://github.com/jupyterhub/) organization.

* All development of the Binder technology will occur in the [binderhub repo](https://github.com/jupyterhub/binderhub)
* Documentation for *users* will occur in the [jupyterhub binder repo](https://github.com/jupyterhub/binder) 
* All conversations and chat for users will occur in the [jupyterhub binder gitter channel](https://gitter.im/jupyterhub/binder)

Thanks for updating your bookmarked links.

## :dash: :dash: **The Binder Project is moving to a [new repo](https://github.com/jupyterhub/binderhub).** :dash: :dash:

---

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

