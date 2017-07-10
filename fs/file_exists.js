var fs = require('fs');

console.log('检测 old.txt 文件是否存在：');
fs.exists('fs/old.txt', function(flag) {
  if(!flag) {
    return console.log('文件不存在');
  }
  console.log('文件存在');
})
