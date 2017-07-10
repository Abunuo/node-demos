var fs = require('fs');

fs.stat('./fs/index.js', function(err, stat) {
  if(err) {
    console.error(err);
  } else {
    console.log(stat);
    console.log('是否是文件：' + stat.isFile());
    console.log('是否是目录：' + stat.isDirectory());
    console.log('是否是 Socket：' + stat.isSocket());
  }
});

console.log('程序执行完毕');
