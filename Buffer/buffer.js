/**
 * Buffer 缓冲区
 * 三种方式写入缓冲区：初始化（Buffer.from(...)）、buf.write(...)、buf[0、1...]
 * 读取缓冲区内容：buf.toString()、buf.toJSON(buf)
 * 缓冲区比较：Buffer.compare([buf1, buf2])、buf.equals(buf1)
 */

var buf2 = Buffer.from([10, 20, 30, 40]);
console.log(buf2); //<Buffer 0a 14 1e 28>   十六进制

var buf3 = Buffer.from('MonologueQing', 'utf-8');
// console.log(buf3);  //<Buffer 4d 6f 6e 6f 6c 6f 67 75 65 51 69 6e 67>

var buf4 = Buffer.from(buf2);
// console.log(buf4);




// var buf4 = Buffer.from(256);
// len = buf4.write('MonologueQing');
// console.log(len);
// console.log(buf4.toString());

var json = buf3.toJSON(buf3);
// console.log(json);


//缓冲区合并
var buf1 = Buffer.from('123');
var buf2 = Buffer.from('abc');
var buf3 = Buffer.concat([buf1, buf2]);
var flag = buf1.equals(buf2);
// console.log(flag);
// console.log(buf3);

//缓冲区比较
var buf1 = Buffer.from('2345');
var buf2 = Buffer.from('23456');
var result = buf1.compare(buf2);
// console.log(result);

//缓冲区截取    buf.slice([start[, end]])
var buf1 = Buffer.from('MonologueQing');
var buf2 = buf1.slice(0, 9);
// console.log(buf2.toString());
// console.log(buf2.toJSON(buf2));
// console.log(buf2);

// var buf = Buffer.from(10);
// buf.fill('123');
// console.log(buf.toString());
