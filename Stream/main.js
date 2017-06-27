/**
 * stream 流   写操作
 */

var fs = require('fs');
var data = 'MonologueQing';

var writerStream = fs.createWriteStream('Stream/output.txt');

writerStream.write(data, 'UTF8');

writerStream.end();  // 标记文件末尾, 表示文件写入完毕，不声明不会执行 finish 方法


writerStream.on('finish', function() {
  console.log('写入完成');
});

writerStream.on('error', function(err) {
  console.log(err.stack);
});

console.log('程序执行完毕');
