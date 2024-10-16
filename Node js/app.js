const http = require('http')

console.log('Hello')

const  requestHandler = (req,res) =>{

  console.log('Request Received',req.url, req.method, req.headers)

}

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT, ()=>{
  console.log(`Server running at: http://localhost:${PORT}/`)
})