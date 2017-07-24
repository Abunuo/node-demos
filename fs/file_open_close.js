var fs = require('fs');
var buf = new Buffer(15);
var arr = []

console.log('准备打开文件');

fs.open('./fs/appID.txt', 'r+', function(err, fd) {
  if(err) {
    return console.error(err);
  };
  console.log('文件打开成功');

  // console.log('准备写入文件');
  // fs.write(fd, '我是写入的信息', function(err, bytes, buff) {
  //   if(err) {
  //     return console.error(error);
  //   };
  //   console.log('写入成功：' + bytes);
  //   console.log('我是写入的内容:  ' + buff);

    console.log('准备读取文件');
      fs.read(fd, buf, 0, buf.length, null, function(err, bytes, buff) {
        if(err) {
          return console.error(err);
        };

        //打印读取文字
        if(bytes > 0) {
          console.log(buf.slice(0, 12).toString());
          // i++;
          // console.log('我是读取的内容：' + buff.slice(0, bytes).toString());
        }
      });

      //关闭文件
      fs.close(fd, function(err) {
        if(err) {
          return console.error(err);
        };
        console.log('文件关闭成功');
      });
  // });
});

console.log('程序执行完毕');
