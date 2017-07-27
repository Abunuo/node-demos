var http = require('http')
var app = require('./express_static.js')


http.createServer(app).listen(8080, '127.0.0.1', function(){
  console.log("Server Running!!");
})
