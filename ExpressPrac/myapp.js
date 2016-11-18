var express = require('express');
var app = express();

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
    // 如果 user id 为 0, 跳到下一个路由
    if (req.params.id == 0) next('route');
    // 否则将控制权交给栈中下一个中间件
    else next(); //
}, function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', { error: err });
});




app.get('/user/:id', function (req, res, next) {
    res.send('special2');
});

// 处理 /user/:id， 渲染一个特殊页面
app.get('/user/:id', function (req, res, next) {
    res.send('special1');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host)
    console.log('Example app listening at http://%s:%s', host, port);
});