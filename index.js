const http = require("http");

http.createServer((req, res) => {
  const path = req.url.toLowerCase()
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('home page');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Tofu ethical literally taxidermy woke. Pour-over viral cred raw denim activated charcoal. Next level meh yr humblebrag. Copper mug try-hard flannel, succulents gochujang drinking vinegar meditation sartorial. Banjo irony try-hard slow-carb DIY kinfolk flexitarian.');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('page unavailable');
      break;
  }
}).listen(process.env.PORT || 3000);