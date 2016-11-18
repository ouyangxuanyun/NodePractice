var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  getTitles(res);
}).listen(8800, '127.0.0.1')


function getTitles(res) {
  fs.readFile('./titles.json', function (err, data) {
    if (err) return hadError(err, res);
    var titles = JSON.parse(data.toString());
    getTemplate(titles, res);
  })

}

function  getTemplate(titles, res) {
  fs.readFile('./template.html', function (err, data) {
    if (err) return hadError(err, res);
    var tmpl = data.toString()
    formatHtml(titles, tmpl, res);
  })
  
}

function formatHtml(titles, tmpl, res) {
  var html = tmpl.replace('%', titles.join('<li></li>'))
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(html)  
}

function hadError(err, res){
  console.log(err);
  res.end();
}