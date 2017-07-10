var fs = require('fs')

console.log('准备删除文件')

fs.open('fs/input.txt', 'r', function(err, fd) {
  if(err) {
    fs.touch()
  }
})
fs.unlink('fs/input.txt', function(err) {
  if(err) {
    return console.error(err)
  }
  console.log('文件删除成功')
})

console.log('程序执行完毕');
