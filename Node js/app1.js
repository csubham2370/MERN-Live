const http = require('http')

console.log('Hello')

const  requestHandler = (req,res) =>{

  res.setHeader('Content-Type', 'text/html')
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello world</h1>
</body>
</html>`);
res.end();

}

const server = http.createServer(requestHandler);

const PORT = 3002;
server.listen(PORT, ()=>{
  console.log(`Server running at: http://localhost:${PORT}/`)
})