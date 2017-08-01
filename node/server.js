var http = require('http');

var server = http.createServer(function(req, res) {
  //res.status(200);
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);
console.log("server initialized");