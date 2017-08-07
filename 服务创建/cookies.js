var http = require('http');
var https = require('https')
var request = require('request')
var express = require('express')
var app = express()

var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use('*', function(req, res){
  res.cookie('cookie','hahahha')
  res.send('hahah');
})
http.createServer(app).listen(8080,'127.0.0.1', function(){
  console.log('http://127.0.0.1:8080');
})

request('http://127.0.0.1:8080', function(err, res, body) {
  console.log(body);
})
