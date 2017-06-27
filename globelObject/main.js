console.log(__filename);   //  文件绝对路径：/Users/Abunuo/Desktop/workSpace/node/globelObject/main.js

console.log(__dirname);  // 文件所在目录绝对路径 /Users/Abunuo/Desktop/workSpace/node/globelObject

var a = 0;
setTimeout(function () {
  console.timeEnd(a);    //0:  1004.630ms
}, 0);
console.time(a);

var b = 33849;
console.log('数字是：' + b);
console.log('数字式：%d', b);
