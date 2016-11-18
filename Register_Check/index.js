var express = require('express');
var app = express();
var route = require('./routes/index')
var http = require('http')
var path = require('path')

app.use(route)
app.set('views',__dirname + '/views')
app.set('view engine', 'ejs')
var server = app.listen(8000, function () {
    console.log("server is running at http://127.0.0.1:8000/")
})