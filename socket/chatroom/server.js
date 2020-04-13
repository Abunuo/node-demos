/*
    websocket 服务端代码
 */

const app = require('http').createServer(), // 构建 http 服务
    io = require('socket.io')(app); // 引入socket.io

const PORT = 8081; // 端口号
app.listen(PORT); // 服务监听 8081 端口

/**
 *监听客户端连接
 *io是我们定义的服务端的socket
 *回调函数里面的socket是本次连接的客户端socket
 *io与socket是一对多的关系  socket相当于多个 client
 */
let userIdArr = []; // 用来存放用户 ID
io.on('connection', function(socket) {
    /*所有的监听on，与发送emit都得写在连接里面，包括断开连接*/
    // 用户登录
    socket.on('login', function(data) {
        if(userIdArr.includes(data.userId)) {
            io.sockets.emit('errorMessage', '用户已存在，请刷新');
        } else {
            userIdArr.push(data.userId);
            console.log(`用户${data.userId}已登录`)
        }
    })
    
    // 接受客户端消息
    socket.on('message', function(data, callback) {
        console.log(`已收到客户端消息：${JSON.stringify(data)}`);
        
        // 向客户端发送接收回执
        callback(1);
        
        // 向所有客户端发送消息
        io.sockets.emit('receiveMessage',data);
        
        
        // 广播  -->  将消息发送给除发送者以外的所有人。
        // socket.broadcast.emit('receiveMessage', data);
    })
})




console.log('socket is openning, and app listen at: ' + PORT);