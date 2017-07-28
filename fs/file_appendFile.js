var fs = require('fs')

fs.appendFile('./fs/input.txt', '\n我是后加的内容', function(err) {
  if(err) return console.log(err);
  console.log('添加成功');
})
