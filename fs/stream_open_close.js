var fs = require('fs')
var request = require('request')
var http = require('http')

// var readStream = fs.createReadStream('./fs/appID.txt');
var readStream = fs.createReadStream('/Users/Abunuo/Downloads/ganzhou-14844-udid-new.csv');
var writeStream = fs.createWriteStream('./fs/appID2.txt');

var arr = []
var str = ''

// fs.createReadStream('./fs/appID.txt')
//   .pipe(writeStream)

readStream.on('data', function(data) {
  if(writeStream.write(data) == false) {
    str+=data.toString();
    readStream.pause();
  }
})

readStream.on('end', function() {
  writeStream.end()
  str.split('\r\n').forEach(function(item) {
    var temp = item.split(',')[1];

    arr.push(temp);
  })
  console.log(arr[0]);
  var options = {
    method: 'GET',
    url: 'http://api.3023.com/apple/apple',
    qs: {
      sn: arr[1]
    },
    headers:{
      'key': '99e8c42b24b073033ae745e2dda53190'
    }
  }
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      // console.log(body.toString().indexof(''));
    }
  })
})

writeStream.on('drain', function() {
  readStream.resume();
})
