var fs = require('fs');

var zlib = require('zlib');

//压缩 input.txt文件为 input.txt.gz
fs.createReadStream('Stream/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('Stream/input.txt.gz')
          .on('finish', function() {
              console.log("压缩完毕");
          }));
console.log('程序执行完毕');
