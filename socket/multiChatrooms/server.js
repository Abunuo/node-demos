var app = require('http').createServer(),
    io = require('socket.io')(app);
    
app.listen(8082);

let chat1 = io.of('/chat1')
    .on('connection', function(socket) {
        console.log('聊天室 1 已进入新用户');
        // 接受客户端消息
        socket.on('message', function(data, callback) {
            console.log(`chat1 已收到客户端消息：${JSON.stringify(data)}`);
            
            // 向客户端发送接收回执
            callback(1);
            
            // 向所有客户端发送消息
            socket.broadcast.emit('receiveMessage', data);
            // io.sockets.emit('receiveMessage',data);
            
        })
    })

let chat2 = io.of('/chat2')
    .on('connection', function(socket) {
        console.log('聊天室 2 已进入新用户');
        // 接受客户端消息
        socket.on('message', function(data, callback) {
            console.log(`chat2 已收到客户端消息：${JSON.stringify(data)}`);
            
            // 向客户端发送接收回执
            callback(1);
            
            // 向所有客户端发送消息
            socket.broadcast.emit('receiveMessage', data);
            
        })
    })