// 输出到终端
process.stdout.write("Hello World!" + "\n");
process.stderr.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(item, index, array) {
   console.log(index + ': ' + item);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);
