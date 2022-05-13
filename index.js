//import * as titans from './data/data.js';
//import http from 'http';
import express from 'express';
import { Titan } from "./models/Titans.js"


const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.get('/', (req, res) => {
  Titan.find({}).lean().then((titans) => {
    res.render('home', { titans });
  })
});

app.get('/detail', (req,res) => {
  Titan.findOne({ name:req.query.name }).lean().then((titan) => {
          res.render('details', {result: titan} )
      })
})

app.listen(app.get('port'), () => {
  console.log('Express started');
});


/*http.createServer((req, res) => {
  const path = req.url.toLowerCase()
  let url_parts = req.url.split("?"); 
  console.log(url_parts)
  let params = new URLSearchParams(url_parts[1]); 
  let name = params.get('name'); 
  console.log(path)

  switch(url_parts[0]) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(titans.getAll()));
      break;

    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Tofu ethical literally taxidermy woke. Pour-over viral cred raw denim activated charcoal. Next level meh yr humblebrag. Copper mug try-hard flannel, succulents gochujang drinking vinegar meditation sartorial. Banjo irony try-hard slow-carb DIY kinfolk flexitarian.');
      break;

      
      case `/detail`:
      let found = titans.getItem(`${name}`);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let results = (found ? JSON.stringify(found) : 'Not found');
      res.end(`Result for ${name} ${results}`);
      break;

   
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 error : page unavailable');
      break;
  }

  
}).listen(process.env.PORT || 3000);*/