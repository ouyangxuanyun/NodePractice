/**
 * Created by zq on 16-11-1.
 */
var mongojs = require('mongojs');

var mydb = mongojs("mongodb://localhost:27017/todos");

exports.findtodos = function(callback){
    mydb.collection('mytodos').find({},function(err,docs){
        if(err){
            callback(err)
        }else{
            console.log(JSON.stringify(docs,null,4));
            docs.forEach(function(doc){
                doc.id=doc._id.toString();
            })
            callback(null,docs)
        }
    })
}

exports.addtodo = function(todo,callback){
    mydb.collection('mytodos').insert({todo:todo.todo,time:new Date().toLocaleDateString()},function(err,result){
        if(err){
            callback(err);
        }else{
            callback(null);
        }
    })
}

exports.modtodo = function(todo,callback){
    mydb.collection('mytodos').update({_id:mongojs.ObjectId(todo.id)},{$set:{todo:todo.todo}},function(err,result){
        if(err){
            callback(err);
        }else{
            callback(null);
        }
    })
}

exports.deltodo = function(todos,callback){
    var idarr = new Array();
    todos.forEach(function(id){
        idarr.push(mongojs.ObjectId(id))
    })
    mydb.collection('mytodos').remove({_id:{$in:idarr}},function(err,result){
        if(err){
            callback(err);
        }else{
            callback(null);
        }
    })
}