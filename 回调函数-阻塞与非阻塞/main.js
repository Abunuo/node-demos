
//阻塞代码(同步)    按顺序执行
var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('程序执行完毕');

//非阻塞代码(异步)    先打印执行完毕再打印文件
var fs = require('fs');

fs.readFile('input.txt', function(err, data) {
  if(err){
    return consolr.error(err);
  }
  console.log(data.toString());
});
console.log('程序执行完毕');
