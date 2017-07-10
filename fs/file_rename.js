var fs = require('fs');

console.log('准备重命名');
var oldName = 'fs/old.txt', newName = 'fs/new.txt';
fs.exists('fs/old.txt', function(flag) {
  if(!flag) {
    oldName = 'fs/new.txt';
    newName = 'fs/old.txt';
    return rename();
  }
  rename();
})

function rename(fd) {
  fs.rename(oldName, newName, function(err) {
    if(err) {
      return console.error(err)
    }
    console.log('重命名成功, 新名字为：' + newName.slice(3));
  })
}
