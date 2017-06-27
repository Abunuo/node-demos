/**
 * stream 流  读取操作 
 *
 */
var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('Stream/input.txt');

//设置编码
readerStream.setEncoding('UTF8');

//处理流事件 --> data, end, and, error
readerStream.on('data', function(chunk) {
 data += chunk;
});

readerStream.on('end', function() {
 console.log(data);
});

readerStream.on('error', function(err) {
 console.log(err.stack);
});

console.log('执行完毕');
