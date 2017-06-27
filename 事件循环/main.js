var events = require('events');

var eventEmitter = new events.EventEmitter();

//创建事件开始处理程序
var connectHandler = function connect() {
  console.log('链接开始');

  //触发另一个事件
  eventEmitter.emit('date_received');
}

//绑定 connect 事件
eventEmitter.on('connect', connectHandler);

//绑定 date_received 事件
eventEmitter.on('date_received', function() {
  console.log('数据接收成功');

});

eventEmitter.emit('connect');

console.log('程序执行完毕');
