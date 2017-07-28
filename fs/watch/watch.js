var fs = require('fs')

var watcher = fs.watch(__dirname, function(eventType, fileName) {
  if(fileName) {
    console.log(fileName + ' 进行了 ' + eventType + " 操作");
    watcher.close() 
  }
})
