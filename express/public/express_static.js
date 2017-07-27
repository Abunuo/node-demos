var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'image'))); //相对地址，相对服务根目录 或者绝对路径

app.get('/', function(req, res) {
  res.send('HELLO WORLD')
})

module.exports = app
