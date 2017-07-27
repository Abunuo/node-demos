var buf1 = Buffer.alloc(5)  //创建长度为 5 的 Buffer
var buf2 = Buffer.from([1,2,3,4,5])   //创建 ArrAy 的 buffer
var buf3 = Buffer.from('Abunuo')  //创建 String 的 buffer
var buf4 = Buffer.from(buf2)  //创建 Buffer 类型的 buffer


for(var i = 0; i < 5; i++){
  buf1[i] = i+97;
  buf1[0] = 33
}
console.log(buf1.toJSON(),buf1.toString());
for (const value of buf1.values()) {
  console.log(String.fromCharCode(value));
}
console.log(buf2.toJSON());
console.log(buf3.toJSON(),buf3.toString());
for (const value of buf3.values()) {
  console.log(String.fromCharCode(value));
}
console.log(buf4.toJSON());
