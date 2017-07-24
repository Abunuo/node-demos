var fs = require('fs')
var request = require('request')

var url = "http://test.asos.upay360.cn/accounts/csv/upload"


// fs.createReadStream('./request/load/30_re.csv').pipe(request.post(url, function(err, res, body){
//   console.log(err);
//   console.log(res.statusCode);
//   console.log(JSON.parse(body));
// }))

fs.createReadStream('./request/load/30_re.csv').pipe(request.post(url))
  .on('error', function(error) {
    console.log(1);
    console.log(error);
  })
  .on('response', function(response) {
    console.log(2);
    console.log(response.statusCode);
  })
  .on('body', function(body) {
    console.log(3);
    console.log(JSON.parse(body));
  })
