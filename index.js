import * as titans from './data.js';
import http from 'http';






http.createServer((req, res) => {
  const path = req.url.toLowerCase()
  let detail = req.url.split("?"); 
  let params = new URLSearchParams(detail[1]); 
  let name = params.get('NAME'); 

  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(titans.getAll()));
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Tofu ethical literally taxidermy woke. Pour-over viral cred raw denim activated charcoal. Next level meh yr humblebrag. Copper mug try-hard flannel, succulents gochujang drinking vinegar meditation sartorial. Banjo irony try-hard slow-carb DIY kinfolk flexitarian.');
      break;

      
      case `/detail?name=${name}`:
      let found = titans.getItem(`${name}`);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let results = (found ? JSON.stringify(found) : 'Not found');
      res.end(`Result for ${name} ${results}`);
      break

   
       
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('page unavailable');
      break;
  }
}).listen(process.env.PORT || 3000);