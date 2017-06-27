/**
 * Buffer 缓冲区
 * 三种方式写入缓冲区：初始化（new Buffer(...)）、buf.write(...)、buf[0、1...]
 * 读取缓冲区内容：buf.toString()、buf.toJSON(buf)
 * 缓冲区比较：Buffer.compare([buf1, buf2])、buf.equals(buf1)
 */


var buf = new Buffer(10);
// console.log(buf);  //<Buffer 08 08 00 03 01 00 00 00 ff ff>
// console.log(Object.prototype.toString.call(buf));  //[object Uint8Array] 类数组类型，每一项均为 8bit

var buf2 = new Buffer([10, 20, 30, 40]);
// console.log(buf2); //<Buffer 0a 14 1e 28>   十六进制

var buf3 = new Buffer('MonologueQing', 'utf-8');
// console.log(buf3);  //<Buffer 4d 6f 6e 6f 6c 6f 67 75 65 51 69 6e 67>

var buf4 = new Buffer(buf2);
// console.log(buf4);




var buf4 = new Buffer(256);
len = buf4.write('MonologueQing');
// console.log(len);
// console.log(buf4.toString());

var json = buf3.toJSON(buf3);
// console.log(json);


//缓冲区合并
var buf1 = new Buffer('123');
var buf2 = new Buffer('abc');
var buf3 = Buffer.concat([buf1, buf2]);
var flag = buf1.equals(buf2);
// console.log(flag);
// console.log(buf3);

//缓冲区比较
var buf1 = new Buffer('2345');
var buf2 = new Buffer('23456');
var result = buf1.compare(buf2);
// console.log(result);

//缓冲区截取    buf.slice([start[, end]])
var buf1 = new Buffer('MonologueQing');
var buf2 = buf1.slice(0, 9);
// console.log(buf2.toString());
// console.log(buf2.toJSON(buf2));
// console.log(buf2);

var buf = new Buffer(10);
buf.fill('123');
console.log(buf.toString());
