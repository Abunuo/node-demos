var http = require('http');
var fs = require('fs');

var data = fs.readFileSync('./appID.txt');

var arr = data.toString().split('，');
var num = 1;
var errorID = '';
var falseID = '';
var errorReq = '';
var i = 0;


function running(i) {
  var data = arr.slice(i, i+99);
  data.map(function(item, index) {
    
  })
  setTimeout(running, 1000000000000)
}










arr.map(function(item, index) {
  total ++;
  let qs = {
    sn: item
  }
  var request = require("request");
  var options = {
   method: 'GET',
   url: 'http://api.3023.com/apple/apple',
   qs: qs,
   headers: {
    'key': 'b2bf6bd3e675bee21a576faf891c5697'
   }
  };
  request(options, function(error, response, body) {
   if (error) {
      errorReq = errorReq + " " + item + " ";
      fs.writeFile('./errorReq.txt', errorReq, function(err) {
        console.log(item);
      })
    }
    body = JSON.parse(body);

    if (body.code) {
      if (body.code == 302311) {
        errorID = errorID + " " + item + " ";
        fs.writeFile('./errorID.txt', errorID, function(err) {
          console.log(item + '序列号错误');
        })
      }
      if (body.code == 302312) {
        falseID = falseID + " " + item + ' ' + num + ' ';
        num ++;
        fs.writeFile('./falseID.txt', falseID, function(err) {
          console.log(item + " " +body.message);
        })
      }
    }
  });
  console.log(index);
})
