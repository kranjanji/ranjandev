const http = require('http');
const port = process.env.PORT || 3002

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello,<br> Ranjan Is Soluction Architech <br/> GitHub and Heroku & AWS....</h1><br/> In Pune');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
