/**
 * WallPaper网站获取壁纸
 * 地址： https://ss.netnr.com/wallpaper
 */

const fs = require('fs');
const request = require('request');
const index = 0;

const defaultParams = {
    url: '',
    method: 'GET',
    json: true
}

function getImages(index) {
  let url = `http://wallpaper.apc.360.cn/index.php?c=WallPaper&start=${index}&count=1&from=360chrome&a=getAppsByCategory&cid=6`
  let params = Object.assign({}, defaultParams, {url})
  request(params, function(err, httpRes, body) {
    const resData = body.data;
    resData.map(async item => {
      let url = item.url.replace("__85", "__100"),
        name = item.utag ? item.utag : new Date().getTime();
      let readStream = request(url),
        writeStream = fs.createWriteStream(`./imgfile/girl/${name}.jpg`);
      await readStream.pipe(writeStream);
      if(index < 400) {
        getImages(++index)
      } else {
        console.log('下载完成');
      }
    })
  })
}
getImages(index)
