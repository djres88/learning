var mongo = require('mongodb').MongoClient
mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  db.collection('parrots')
})

collection.find({
     name: 'foo'
   }).toArray(function(err, documents) {

   })
