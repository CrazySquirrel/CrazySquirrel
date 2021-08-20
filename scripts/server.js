const fs = require('fs');
const http = require('http');
const path = require('path');
const hostname = '127.0.0.1';
const port = 8080;
const locale = 'base';

const {ssr} = require('./ssr');

const STATIC = path.resolve(__dirname + `/../build/${locale}`);

http.createServer((req, res) => {
  const fileName = path.resolve(STATIC + (req.url.endsWith('/') ? req.url + 'index.html' : req.url));
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
}).listen(port, hostname, () => {
  fs.watchFile(path.resolve(STATIC, 'static/index.html'), () => ssr(locale));
  fs.watchFile(path.resolve(STATIC, 'static/inline.css'), () => ssr(locale));
  fs.watchFile(path.resolve(STATIC, 'static/inline.js'), () => ssr(locale));
  fs.watchFile(path.resolve(STATIC, 'static/sprite.svg'), () => ssr(locale));
  
  console.log(`Server running at http://${hostname}:${port}/`);
});
