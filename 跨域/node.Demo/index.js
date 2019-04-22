const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const server = http.createServer(function (req,res) {
    //根据url读取
    //解析URL
    let url = req.url;
    //mime模块 解析css 没有minme模块无法解析css Content-Type后解析html
    //后缀名如何得到
    let extname = path.extname(req.url);
    console.log(extname,"带点的");
    extname = extname.substring(1);

    fs.readFile(path.join(__dirname,url),(err,data)=>{//回调函数  对应const path
        if(err){//得到数据
            return
        }
        //响应头                           解析完整静态页面
        res.writeHead(200,{"Content-Type":mime.getType(extname)});
        res.write(data);
        res.end();
    })
})

server.listen(3001);