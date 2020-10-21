const http = require('http');
const port = process.env.PORT || 3002

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Ranjan: GitHub and Heroku</h1><br/> In Delhi');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
