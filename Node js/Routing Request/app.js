const http = require('http')

const fs = require('fs')

console.log('Hello')

const  requestHandler = (req,res) =>{

  console.log('Request Received',req.url, req.method, req.headers)

  if (req.url === '/'){

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
   <form action="/buy-product" method="POST">
        <!-- Name Field -->
        <label for="name">Full Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

       
        <!-- Submit Button -->
        <input type="submit" value="Submit">
    </form>
</body>
</html>`);



}

// else if (req.url === '/buy-product') {
//   res.statusCode = 302; // 302: Found (used for redirection)
//   res.setHeader('Location', '/product'); // Redirect to '/product'
//   res.end(); // End the response
// }

else if (req.url === '/buy-product') {
  const arr =[];
  req.on('data', (chunk) =>{
    console.log(chunk)
    arr.push(chunk)})

  req.on('end',() => {
    const body = Buffer.concat(arr).toString();
    console.log(body)
  })

  fs.writeFileSync = ('buy.txt', 'Myntra app')
  res.statusCode = 302;
  res.setHeader('Location', '/product');
  

 
  
}



else if(req.url === "/product"){


  res.setHeader('Content-Type', 'text/html')
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Product</h1>
</body>
</html>`);

}
else{
  res.write('<h1>404 not found</h1>')
}
res.end()
}

const server = http.createServer(requestHandler);

const PORT = 3002;
server.listen(PORT, ()=>{
  console.log(`Server running at: http://localhost:${PORT}/`)
})