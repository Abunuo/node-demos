var request = require('request')
var fs = require('fs')

//获取网上图片并下载
var url = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3651875346,3906543847&fm=117&gp=0.jpg'
request(url)
  .on('data', function(chunk) {
    console.log(chunk);
  })
  .pipe(fs.createWriteStream('./request/load/img.jpg'))
  .on('error', function(error) {console.log(error);})
  .on('finish', function(){console.log('图片下载完成');})

// url = 'http://asos.upay360.cn/accounts/csv/report?importId=30&isRecoverable=true';  //下载文件
// request(url).pipe(fs.createWriteStream('./request/load/30_re.csv')).on('finish', function(){console.log('文件下载完成');})
