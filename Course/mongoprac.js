var mongo = require('mongodb')
var host = 'localhost'
var port = 27017
var server = new mongo.Server(host, port, {auto_reconnect: true})
var db = new mongo.Db('node-mongo-examples', server, {safe: true})
db.open(function (err, db) {
  if (err) return console.log(err)
  console.log('open ready')
  db.collection('users', function (err, collection) {
    if (err) return console.log(err)
    else {
      console.log('indatabase')
      collection.find({}).toArray(function (err, docs) {
        if (err) throw  err
        else {
          console.log(docs)
          db.close()
        }
      })
    }
  })
})
