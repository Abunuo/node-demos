var fs = require('fs')

console.log('创建目录开始');

fs.mkdir('fs/mkdir', function(err) {
  if(err) {
    return console.error(err);
  }
  console.log('创建完成');
})

console.log('开始读取目录');
fs.readdir('fs/', function(err, files) {
  if(err) {
    return console.error(err);
  }
  files.forEach(function(item) {
    console.log(item);
  })
  console.log('读取完毕');
})
console.log('程序执行完毕');
