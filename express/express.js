var request = require('request')
var express = require('express')
var app = express()

app.get('/', function(req, res) {
  console.log(req.fresh);  //false
  console.log(req.query);  //{id:1}
  console.log(req.hostname);  //127.0.0.1
  console.log(req.originalUrl);  //  /?id=1
  console.log(req.params);  //  {}
  console.log(req.protocol);  //  http
  console.log(req.router);  //  undefined
  console.log(req.accepts());  //  */*
  console.log(req.acceptsCharsets(), req.acceptsEncodings(), req.acceptsLanguages());  //  * , 'identify', *
  // console.log(req.get());
  // console.log(req.is());
  res.end('结束请求')
})

var server = app.listen({port:8081,host:'127.0.0.1'}, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('应用实例，访问地址为 http://%s:%s', host, port);
})

var options = {
  uri: 'http://127.0.0.1:8081',
  qs: {
    id:1,
    name : 'lmq'
  },
  method: "GET",
  headers: {}
}

request(options, function(err, res, body) {
  if(err) return console.log(err);
  console.log(body);
})
