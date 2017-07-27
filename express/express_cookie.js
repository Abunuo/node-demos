var express = require('express')
var cookieParser = require('cookie-parser')
var request = require('request')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
  console.log('cookie 是：', req.cookies);
  res.end('请求结束')
})

app.listen(8081)

request('http://127.0.0.1:8081', function(err, res, body){
  console.log(body);
})
