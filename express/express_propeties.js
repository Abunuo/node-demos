var express = require('express')
var admin = express()
var app = express()
var main = express()

app.get('/', function(req, res) {
  console.log(app.mountpath);
  res.send('app')
})

main.get('/', function(req, res) {
  console.log(main.mountpath);
  res.end('main')
})

admin.use('/main', main);
admin.use(['/app', '/manager'], app);

admin.listen({port:8000,url:'127.0.0.1'})
