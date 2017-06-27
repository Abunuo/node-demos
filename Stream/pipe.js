var fs = require('fs');

// var readerStream = fs.createReadStream('Stream/input.txt')
// var readerStream1 = fs.createReadStream('Stream/test.txt')

var writerStream = fs.createWriteStream('Stream/output.txt');


//管道流读写操作   写入顺序跟读取顺序有关，跟写入顺序无关
//读取 input 文件内容，并写入到 output.txt 文件中
// readerStream.pipe(writerStream);
// readerStream1.pipe(writerStream);

fs.createReadStream('Stream/input.txt')
  .pipe(writerStream);
fs.createReadStream('Stream/test.txt')
  .pipe(writerStream);

console.log('程序执行完毕');
