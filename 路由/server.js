var http = require("http");
var url = require("url");

function start(router) {
  function onRequest(request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname);

    router(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8000, '127.0.0.1', function() {
    console.log("Server has started.");
  });
}

module.exports = start;
