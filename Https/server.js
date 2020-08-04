var app = require('express')();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./Https/private.pem', 'utf8'),
    certificate = fs.readFileSync('./Https/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 8000;
var SSLPORT = 8001;

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// Welcome
app.get('/', function(req, res) {
    if(req.protocol === 'https') {
      let html = fs.readFileSync('./Https/index1.html', 'utf8');
      res.status(200).send(html);
    } else {
      res.status(200).send('Welcome!');
    }
});