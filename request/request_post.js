var fs = require('fs')
var request = require('request')

var url = "http://www.hao123.com"


fs.createReadStream('./request/load/30_re.csv').pipe(request.post(url, function(err, res, body){
  console.log(err);
  console.log(res.statusCode);
  console.log(JSON.parse(body));
}))
