var express = require('express')
var router = express.Router()
var dbutil = require('../public/dbutlis')
var path = require('path')

router.get('/', homepage)
router.get('/secondepage', secondepage)

// var homedata = {
//   'title': 'this is menu',
//   'message': 'Hello HAHA',
//   'price': 666
// }

function homepage(req,res,next) {
  res.sendFile(path.resolve(__dirname,'..') + '/src/page.html');
}

function secondepage (req, res, next) {
  // res.render('hometemplate', homedata)
  dbutil.readfromdb(function (data) {
    res.json(data);
  })
}

module.exports = router
