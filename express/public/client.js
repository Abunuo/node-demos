var request = require('request')

request.get('http://127.0.0.1:8080/ac4bd11373f082025c35428448fbfbedaa641be1.jpg', function(err, res, body) {
  console.log(body);
})
