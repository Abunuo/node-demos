var fs = require('fs');

var zlib = require('zlib');

//解压 input.txt.gz 解压文件为 input_gz.txt
fs.createReadStream('Stream/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('Stream/input_gz.txt')
          .on('finish', function() {
            console.log('解压完毕');
          }));

console.log('程序执行完毕');
