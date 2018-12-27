var path = require('path');
const fs=require('fs');

var cwd = process.cwd();
var basePath = path.join(cwd, 'mock', 'data');

module.exports = {
    '**.json': {
        bypass: function(req, res) {
          const filename = path.basename(req.url).split('?')[0];
          const fileP = path.resolve(__dirname,'./mock/data/'+filename);
          const ex = fs.existsSync(fileP);
          console.log('访问代理',req.url,ex,fileP);
          res.setHeader('Content-Type','application/json');
          if(ex){
            res.end(fs.readFileSync(fileP));
          }else {
            res.end('没找到:'+fileP);
          }
        }
    }
};
