/**
 *
 * 网站地址：http://data.3023.com/apple/
 * create by Abunuo 2017-7-25
 *
 */


var fs = require('fs')
var request = require('request')
var http = require('http')

var readStream = fs.createReadStream('/Users/Abunuo/Downloads/ganzhou-14844-udid-new.csv'); //读取文件地址
var writeStream = fs.createWriteStream('./fs/appID2.txt');  //文件解析后的数据写入地址

var arr = []  //存储读取文件解析后的数据
var str = ''  //存取读取流数据

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
  createSn(arr)
})

writeStream.on('drain', function() {
  readStream.resume();
})

async function createSn(arr){
  for(var i = 0; i < arr.length; i++){
    await getReq(arr[i], i);
  }
}

function getReq(sn, index) {
  var options = {
    method: 'GET',
    url: 'http://api.3023.com/apple/apple',
    qs: {
      sn: sn
    },
    headers:{
      'key': 'b2bf6bd3e675bee21a576faf891c5697'
    }
  }
  return(
    new Promise(function(resolve, reject) {
      request(options, function (error, response, body) {
        if(error) {
          console.log(index + ' : ' + error);
          reject()
        }
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body)
            if(body.sn) {
              console.log(index + ' : ' + body.sn)
            } else {
              console.log(index + ' : ' + body.message)
            }
            resolve()
        }
      })
    })
  )
}
