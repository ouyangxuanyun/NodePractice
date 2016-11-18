var express = require('express')
var app = express()
var routes = require('./route/routes.js')
var ejs = require('ejs')
var path = require('path')

app.use(express.static(path.join(__dirname, '/public')))

app.use(routes)
app.listen(8888)
console.log('Server is running')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'handlebars')
