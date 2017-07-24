var http = require('http');
var _request = require('request')

http.createServer(function (request, response) {
  //发送 http 头部、 HTTP 状态值：200：OK、 内容类型：text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  //发送相应数据 “Hello World”
  response.end('Hello World \n');
  // _request.get('http://asos.upay360.cn/accounts/csv/report?importId=30&isRecoverable=true',function(err, res, body) {
  //   response.end(body)
  // })

}).listen(8000, '127.0.0.1', function() {
  //终端打印信息
  console.log('Srever running at http:127.0.0.1:8000/');
});

//终端打印信息
// console.log('Srever running at http:127.0.0.1:8000/');
