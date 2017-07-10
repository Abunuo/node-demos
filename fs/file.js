var fs = require('fs');

//异步打开文件
console.log('开始打开文件');

fs.open('./fs/input.txt', 'r+', function(err, fd) {
  if(err) {
    console.error(err);
  } else {
    console.log('读取完毕');
  }
});

console.log('程序执行完毕');
