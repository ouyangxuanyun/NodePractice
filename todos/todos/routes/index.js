var express = require('express');
var router = express.Router();
var dao = require('../lib/dao.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/todos', function(req, res, next) {
    dao.findtodos(function(err,data){
        res.json(data);
    })
});

router.post('/addtodo', function(req, res, next) {
    dao.addtodo(req.body,function(err,data){
        if(err){
            res.send(err)
        }else{
            res.send('OK')
        }
    })
});


router.post('/deltodo', function(req, res, next) {
    var todoids = req.body.ids.slice(1).split(';')
    dao.deltodo(todoids,function(err,data){
        if(err){
            res.send(err)
        }else{
            res.send('OK')
        }
    })
});

router.post('/modtodo', function(req, res, next) {
    dao.modtodo(req.body,function(err,data){
        if(err){
            res.send(err)
        }else{
            res.send('OK')
        }
    })
});

module.exports = router;
