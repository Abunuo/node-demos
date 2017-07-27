var express = require('express')
var app = express()
var fs = require('fs')
var request = require('request')

//获取用户列表
app.get('/listUsers', function(req, res) {
  fs.readFile(__dirname + '/user.json', 'utf-8', function(err, data) {
    // console.log(data);
    res.end(data)
  })
})


var user = {
  'user4': {
    'name': 'p2p',
    'password': '123',
    'profession': 'teacher',
    'id': 4
  }
}
//添加用户信息
app.get('/addUser', function(req, res) {
  fs.readFile(__dirname+'/user.json', 'utf8', function(err, data) {
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    res.end(JSON.stringify(data))
    fs.writeFile(__dirname+'/user.json', JSON.stringify(data), 'utf8', function(err) {
        if(err) return console.log(err);
    })
  })
})

//获取用户详细信息
app.get('/:id', function(req, res) {
  fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user" + req.params.id]
       if(user == null){
         res.end('该用户不存在')
       } else {
         res.end( JSON.stringify(user));
       }
   });
})

//删除用户
app.get('/deleteUser/:id', function(req, res) {
  fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       if(data["user" + req.params.id]){
         delete data["user" + req.params.id]
         if(data["user" + req.params.id] == null){   //undefined == true  -->true
           fs.writeFile(__dirname+'/user.json', JSON.stringify(data), 'utf8', function(err) {
               if(err) return console.log(err);
           })
           res.end('该用户已删除')
         } else {
           res.end('用户删除失败');
         }
       } else {
         res.end('该用户不存在');
       }
   });
})

var server = app.listen({port:8081, host: '127.0.0.1'}, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('服务已启动，地址为：http://%s:%s', host, port);
})

var options = {
  baseUrl: 'http://127.0.0.1:8081',
  url: '/deleteUser/4',
  method: 'GET'
}
request(options, function(err, res, body) {
  if(err) return console.log(err);
  console.log(body);
})
