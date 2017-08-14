var request = require('request')
var http = require('http')

var appName = '王者荣耀'
var url = 'http://www.cqaso.com/applist?word='
var options = {
  url: 'http://backend.cqaso.com/search/word?sortBy=nature&limit=20&offset=0&country=CN&word=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80',
  // url: url + encodeURIComponent(appName) + '&country=CN',
  method: 'GET',
  headers: [
    {
        name: 'content-type',
        value: 'application/json;charset=UTF-8'
    },{
        name: 'user-agent',
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36 Query String Parameters view source view URL encoded'
    }
  ],
}

// console.log(encodeURIComponent("王者荣耀") == '%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80');
console.log(options.url);

http.createServer(function(req, res) {
  // res.writeHead(200, {'Content-type' : 'application/json;charset=UTF-8'});
  request(options, function(err, response, body) {
    if(err) return console.log(err)
    var data = JSON.parse(body).contents;
    data.forEach(function(item) {
      if(item.name == appName) {
        // console.log(item.appId);
        res.end(JSON.stringify(item))
      }
    })
  })
}).listen(8000)

request('http://localhost:8000', function(req, res) {
  var data = JSON.parse(res.body);
  console.log(data);
})
