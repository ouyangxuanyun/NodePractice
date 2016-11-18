var express = require('express')
var router = express.Router()

router.get('/', homepage)

function homepage (req, res, next) {
    res.render('hometemplate', homedata)
}

module.exports = router
