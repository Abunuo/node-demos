let http  = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');
    
// 打印系统根目录
const baseUrl = path.resolve(process.argv[2] || '.');
console.log(baseUrl);
    
let server = http.createServer(function(req, res){
    let pathname = url.parse(req.url).pathname,
        fileName = pathname.slice(pathname.lastIndexOf('/')+1);
    console.log(pathname);
    let filePath = path.join(baseUrl, pathname);
    console.log(filePath);
    
    fs.stat(filePath, function(err, file) {
        // 设置返回头
        res.setHeader("Content-Type", "application/octet-stream");
        res.setHeader("Content-Disposition", `attachment;fileName=${fileName}`);
        
        if(!err && file.isFile()) {
            console.log('已经读取到文件');
            res.writeHead(200);
            let rs = fs.createReadStream(filePath);
            rs.pipe(res);
        } else {
            let errMsg = 'no file';
            console.log(errMsg);
            res.writeHead(404);
            res.end(`${errMsg}: ${filePath}`);
        }
    })
    
    
})

server.listen(3000);

console.log('server 已经启动~');