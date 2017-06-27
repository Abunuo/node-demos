//var eventEmitter = require('events').EventEmitter;
//var event = new eventEmitter();

var events = require('events');
var eventEmitter = new events.EventEmitter();

console.log('---------------------------执行第一部分程序---------------------------');

var listener1 = function listener1() {
  console.log('监听器 listener1 执行');
}

var listener2 = function listener2() {
  console.log('监听器 listener2 执行');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');//查看监听器数量，**类方法，非实例方法
var listeners = eventEmitter.listeners('connection');//查看具体监听器，实例方法
console.log(eventListeners + '个监听器监听连接事件');

eventEmitter.emit('connection');//监听器 listener1 执行  监听器 listener2 执行

eventEmitter.removeListener('connection', listener1);
console.log('listener1 不在受监听');

eventEmitter.emit('connection'); //监听器 listener1 执行  监听器 listener2 执行   listener1 不在受监听  监听器 listener2 执行

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');//查看监听器数量，**类方法，非实例方法
console.log(eventListeners + '个监听器监听连接事件');

console.log('程序执行完毕');


console.log('------------------------执行第二部分程序------------------------');

var emitter = new events.EventEmitter();
emitter.emit('error');
