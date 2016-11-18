/**
 *开始讲了mongodb的启动连接，还有增删改查的基本操作
 *然后下载mongojs 模块 用这个模块来通过nodejs操作mongodb
 *之后讲利用mongojs连接mongodb并对数据进行增删改查，代码主要是下面这部分
 *注释的是当时没运行测试的，具体用法可以看mongojs
 */

var mongojs = require('mongojs')
var connectionString = 'mongodb://localhost:27017/runoob'
var mdb = mongojs(connectionString)
mdb.on('error', function(err){
    console.error('MongoDb error:', err.message)
    mdb.close()
})
mdb.on('connect', function () {
    console.log('--------------------------------------------------database connected' +
        '--------------------------------------------------')
})

/**
 * read
 */

mdb.collection('col').find({}, function (err, docs) {
    if (err) {
        console.log(err)
        return
    }
    console.log(docs)
})

/**
 * write
 */

// mdb.collection('col').save({name: 'job3'}, function (err, doc) {
//   if (err) {
//     console.log('ERROR', err)
//     return
//   }
//   console.log(doc)
// })

/**
 * delete
 */

// mdb.collection('col').remove({name:"job1"},function(err,arguments) {
//     if (err) {
//     console.log(err)
//     return
//   }
// 	console.log(arguments)
// })

/**
 * find
 */
// mdb.collection('col').find({_id: mongojs.ObjectId('580867df2ee4d18fd09933de')}, function(err, docs){
//    if (err) {
//     console.log('ERROR', err)
//     return
//   }
// 	console.log(docs)
// })

/**
 * update
 */
// mdb.collection('col').update({name:'XiaoMi5'},{$set:{price:12345}}),function (err,arguments) {
//   if (err) {
//     console.log('ERROR', err)
//     return
//   }
//   console.log(arguments)
// }


