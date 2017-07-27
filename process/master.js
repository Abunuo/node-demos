const fs = require('fs');
const child_process = require('child_process')

for(var i = 0; i < 3; i++) {
  var workerProcess = child_process.exec('node process/support.js '+i, function(err, stdout, stderr) {
    if(err) {
      console.log(err.stack);
      console.log('Error code: '+err.code);
      console.log('Signal received: '+err.signal);
    }
    console.log('stdout: '+stdout);
    console.log('stderr: '+stderr);
  })

  workerProcess.on('exit', function(code) {
    console.log('子进程退出，退出码：' + code);
  })
}
process.on('exit', function(code){
  console.log('主进程退出');
})
