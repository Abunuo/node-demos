var http= require('http'),
    io= require('socket.io');
var socket= io.connect('http://localhost:8080');
// socket.connect();

// 添加一个连接监听器
socket.on('connect',function() {
  console.log('Client has connected to the server!');
});

// 添加一个连接监听器
socket.on('message',function(data) {
  console.log('Received a message from the server!',data);
});

// 添加一个关闭连接的监听器
socket.on('disconnect',function() {
  console.log('The client has disconnected!');
});

// 通过Socket发送一条消息到服务器
function sendMessageToServer(message) {
  socket.send(message);
}


sendMessageToServer('我是客户端')
