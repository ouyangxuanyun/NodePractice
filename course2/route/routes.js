var express = require('express')；
var router = express.Router()

router.get('/', homepage)


function homepage (req, res, next) {

  res.send('HHHH')
}

module.exports = router
