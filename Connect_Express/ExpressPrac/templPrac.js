var ejs = require('ejs')
var template = '<%-message%>'
var context1 = {message: 'Hello, template1'}
var context2 = {message: "<script>alert('XSS attack!');</script>"}

console.log(ejs.render(template, context2))
