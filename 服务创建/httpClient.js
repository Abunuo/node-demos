var request = require('request')
var http  = require('http')
var req = http.request({host:'127.0.0.1',port:'8000',method:'POST'}, function(res) {
  var body = '';
  res.setEncoding( 'utf-8' );
  res.on( 'data', function (chunk) {
    body += chunk;
  });
  res.on( 'end', function () {
    console.log( body);
  });
})
req.write('123')
req.end()


// var data = ''
// var req = request('http://127.0.0.1:8000')
//     .on('data', function(chunk) {
//         data+=chunk
//     })
//     .on('end', function(){
//        console.log(data);
//        console.log('断开连接');
//     })
//     .end("客户端断开连接")
