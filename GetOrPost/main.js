var http = require('http')
var url = require('url')
var util = require('util')
var querystring = require('querystring')

http.createServer(function(req, res) {
  //定义变量暂存请求体信息
  var post = ''

  //通过 req 的 data 事件监听函数，每当接收到请求体的数据，就累加到 post 变量中
  req.on('data', function(chunk) {
    post += chunk;
  })

  //在 end 事件触发后，通过 querystring.parse 将 post 解析成真正的 post 请求格式，然后向客户端返回
  req.on('end', function() {
    post = querystring.parse(post);
    res.end(util.inspect(post));
  })

}).listen(3000);
