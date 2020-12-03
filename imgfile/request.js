/**
 * WallPaper网站获取壁纸
 * 地址： https://ss.netnr.com/wallpaper
 */

const fs = require('fs');
const path = require('path');
const request = require('request');
const BasePath = './imgfile/images';
const startIndex = 0;
const maxCount = 30;
/**
 * cid: 36(4K)、6(girl)、35(文字控)、18(baby)、29(日历)
 * 10(炫酷时尚)、5(游戏)、11(明星)、26(动漫卡通)
 * 9(风景)
 */
const cid =  9;

const defaultParams = {
    url: '',
    method: 'GET',
    json: true
}
function getImages(index) {
  let url = `http://wallpaper.apc.360.cn/index.php?c=WallPaper&start=${index}&count=1&from=360chrome&a=getAppsByCategory&cid=${cid}`
  let params = Object.assign({}, defaultParams, {url})
  request(params, function(err, httpRes, body) {
    const resData = body.data;
    resData.map(async item => {
      let url = item.url.replace("__85", "__100"),
        name = item.utag ? item.utag : new Date().getTime();
      let readStream = request(url),
        writeStream = fs.createWriteStream(path.join(BasePath, `${name}.jpg`));
      await readStream.pipe(writeStream);
      if(index - startIndex < maxCount) {
        getImages(++index)
      } else {
        console.log('下载完成');
        // filterImages();
      }
    })
  })
}
function filterImages() {
  let delFiles = [];
  fs.readdir('./imgfile/images', (err,files) => {
    files.forEach((fileName, index) => {
      let filePath = path.join(BasePath, fileName);
      fs.stat(filePath, (err, file) => {
        if(file.size < 1024 * 1024 * 1.5) {
          fs.unlink(filePath, function(err) {
            if(err) {
              return console.error(err)
            }
            delFiles.push(fileName);
          })
        }
      })
      if(index == files.length - 1) {
        console.log('小文件处理完成，处理文件有：',delFiles);
      }
    })
  })
}
getImages(startIndex)