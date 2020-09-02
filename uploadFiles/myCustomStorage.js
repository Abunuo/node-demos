var fs = require('fs')
const defaultOpts = {
  path: './uploadFiles/mergeFile',
  tempPath: './uploadFiles/temp'
}

function MyCustomStorage (opts) {
  Object.assign(defaultOpts, opts)
}

async function mergeChunks(files, fileName) {
  let size = 1 * 1024 * 1024;
  // 处理所有文件合并
  await Promise.all(files.map((filename, index) => {
    return new Promise(resolve => {
      let readStream = fs.createReadStream(`${defaultOpts.tempPath}/${filename}`);
      readStream.on('end', function() {
        fs.unlinkSync(`${defaultOpts.tempPath}/${filename}`);
        resolve(index);
      })
      readStream.pipe(fs.createWriteStream(`${defaultOpts.path}/${fileName}`, {
        start: index * size,
        end: (index + 1) * size
      }))
    })
  }));
  // 删除临时文件夹
  fs.rmdirSync(defaultOpts.tempPath)
}

function writeStream(file, body, cb) {
  // 写入文件
  let outStream = fs.createWriteStream(`${defaultOpts.tempPath}/${body.fileName}-${body.index}`)
  file.stream.pipe(outStream)
  outStream.on('error', cb)
  outStream.on('finish', () => {
    cb(null, {
      path: defaultOpts.tempPath,
      size: outStream.bytesWritten
    })
    // 写入文件以后判断完成是否写入所有片段
    fs.readdir(defaultOpts.tempPath, function(err, files) {
      if(files.length == body.size) {
        mergeChunks(files, body.fileName);
      }
    })
  })
}

MyCustomStorage.prototype._handleFile = function _handleFile (req, file, cb) {
  let body = req.body;
  // 判断文件夹是否存在
  fs.exists(defaultOpts.tempPath, function(flag) {
    if(!flag) {
      // 创建文件夹
      fs.mkdir(defaultOpts.tempPath, function() {
        writeStream(file, body, cb)
      })
      return;
    }
    writeStream(file, body, cb)
  })
}

MyCustomStorage.prototype._removeFile = function _removeFile (req, file, cb) {
  
}

module.exports = function (opts = {}) {
  return new MyCustomStorage(opts)
}