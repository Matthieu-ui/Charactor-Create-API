//import * as titans from './data/data.js';
//import http from 'http';
import express from 'express';
import { titansModel } from "./src/models/titans.model.js"
import { api } from "./routes/routes.js"
import cors from 'cors'; // allow cross-origin resource sharing for appropriate routes
import {fileURLToPath} from 'url';
import path from 'path'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.json()); //Used to parse JSON bodies

app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route
app.use('/api', api);


app.get('/', (req, res) => {
  titansModel.find({}).lean().then((titans) => {
    res.render('home_react', { titans: JSON.stringify(titans) });
  })
});

app.get('/detail', (req,res) => {
  titansModel.findOne({ name:req.query.name }).lean().then((titans) => {
          res.render('details', {result: titans} )
      })
})

// Handler for Error 500
app.use((error, req, res, next) => {
res.status(err.status || 500);
res.json({
  error: {
    message: error
  }
})
})

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send('Error - 404  - Not Found')
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