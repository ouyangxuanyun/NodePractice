"use strict";
var mongojs = require('mongojs')
var connectionString = 'mongodb://localhost:27017/todolist'
var mdb = mongojs(connectionString);
var dboperation = new Object();
mdb.on('error', function(err){
    console.error('MongoDb error:', err.message)
    mdb.close()
})
mdb.on('connect', function () {
    console.log('--------------------------------------------------database connected' +
        '--------------------------------------------------')
})

// updatedb("test1",true,function (data) {
//     console.log(data);
// });
//
// readfromdb(function (data) {
//     console.log(data);
// });



/**
 * read
 */
function readfromdb(callback) {
    mdb.collection('todolist').find({}, function (err, docs) {
    if (err) {
        console.log(err)
        return
    }
        callback(docs) ;
})
}

/**
 * write
 */

function writetodb(_name,_done,callback) {
    mdb.collection('todolist').save({name: _name, done: _done}, function (err, doc) {
        if (err) {
            console.log('ERROR', err)
            return
        }
        callback(doc);
    })
}


/**
 * delete
 */
function deleteindb(_name) {
    mdb.collection('todolist').remove({name:_name},function(err) {
    if (err) {
    console.log(err)
    return
  }
	//console.log(arguments)
})
}


/**
 * find
 */

function findindb() {
    mdb.collection('col').find({_id: mongojs.ObjectId('580867df2ee4d18fd09933de')}, function(err, docs){
   if (err) {
    console.log('ERROR', err)
    return
  }
	console.log(docs)
})
}


/**
 * update
 */

function updatedb(_name,_done) {
    mdb.collection('todolist').update({name:_name},{$set:{done:_done}}),function (err) {
  if (err) {
    console.log('ERROR', err)
    return
  }
}
}

dboperation.readfromdb = readfromdb;
dboperation.deleteindb = deleteindb;
dboperation.findindb = findindb;
dboperation.updatedb = updatedb;

module.exports = dboperation;