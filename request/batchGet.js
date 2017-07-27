var http = require('http');
var fs = require('fs');
var request = require("request");

var options = {
	method: 'GET',
	url: 'http://test.asos.upay360.cn/tasks?agent=e2c52dc2638a56df980cc5bdaa4ba479dcaffd4a&deviceVersion=iPhone&country=CN',
}
var index = 1;
var count = 2*60*5
var f = function() {
  request(options, function(error, response, body) {
    if (error) return console.log(new Error(error));
		console.log('第'+index+'次成功');
		index ++;
  })
}
var t = setInterval(function(){
	if(index <= count) {
		f()
	} else {
		clearInterval(t)
	}
}, 500);
