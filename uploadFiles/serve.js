/**
 * 上传文件
 * @url {/upload]} 直接上传
 * @url {/upload/chunks]} 分片上传
 */

var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var multer = require('multer')
var fs = require('fs')

// 设置保存上传文件路径
// 处理上传文件
var upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploadFiles/file')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

var MyCustomStorage = require('./myCustomStorage');
var uploadChunks = multer({
  storage: MyCustomStorage({
    path: './uploadFiles/mergeFile',
    tempPath: './uploadFiles/temp'
  })
})

// 解析 post 方式 body 参数
app.use(bodyParser.urlencoded({extended : false}));  // 处理 post 请求 application/x-www-form-urlencoded
app.use(bodyParser.json());  // json 格式

app.use('*', function(req,res,next) {
    next();
})

//上传文件
app.post('/upload', upload.any(), function(req, res) {
  let file = req.files[0];
  console.log('file', file);
  res.send({
    code: 0,
    meg: '上传成功'
  })
})
// 分片上传文件
app.post('/upload/chunks', uploadChunks.any(), function(req, res) {
  let file = req.files,
      body = req.body;
  console.log('file', file);
  console.log('body', body);
  res.send({
    code: 0,
    meg: '上传成功'
  })
})

var server = app.listen({port:8888, host: '127.0.0.1'}, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('服务已启动，地址为：http://%s:%s', host, port);
})
