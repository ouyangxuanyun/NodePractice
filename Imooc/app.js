var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()
var bodyParser = require('body-parser')

app.set('views', './views/pages')
app.set('view engine', 'jade')
// app.use(express.bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('imooc started on port ' + port)

app.get('/', function (req, res) {
  res.render('index', {
    title: 'immoc 首页',
    movies: [{
      title: '机械战警1',
      _id: 1,
      poster: 'https://img3.doubanio.com/view/photo/photo/public/p2171258566.jpg'
    }, {
      title: '机械战警2',
      _id: 2,
      poster: 'https://img3.doubanio.com/view/photo/photo/public/p2171258566.jpg'
    }, {
      title: '机械战警3',
      _id: 3,
      poster: 'https://img3.doubanio.com/view/photo/photo/public/p2171258566.jpg'
    }]
  })
})

app.get('/movie/:id', function (req, res) {
  res.render('detail', {
    title: 'immoc 详情页面',
    movie: {
      doctor: '何塞帕迪亚卡',
      country: '美国',
      title: '机械战警',
      year: '2016',
      poster: 'https://img3.doubanio.com/view/photo/photo/public/p2171258566.jpg',
      language: '英语',
      flash: 'https://img3.doubanio.com/view/photo/photo/public/p2171258566.jpg',
      summary: 'hthttp://http://ahttp://adhttp://adsfd/adsfadsfadsf/adsfasdfq32423132sfd/adsfadsfadsf/adsfasdfq32423132dsfd/adsfadsfadsf/adsfasdfq32423132dsfd/adsfadsfadsf/adsfasdfq32423132tp://adsfd/adsfadsfadsf/adsfasdfq32423132'
    }
  })
})

app.get('/admin/movie', function (req, res) {
  res.render('admin', {
    title: 'immoc 后台录入页面',
    movie: {
      title: '',
      doctor: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
  })
})

app.get('/admin/list', function (req, res) {
  res.render('list', {
    title: 'immoc 列表页面',
    movie: [{
      title: '机械战警',
      _id: 1,
      doctor: '何塞趴地利亚',
      contry: '美国',
      year: '2016',
      poster: 'asdfadfadfa',
      language: '英语',
      flash: 'afdadsf',
      summary: 'adsfadfaf'
    }]
  })
})
