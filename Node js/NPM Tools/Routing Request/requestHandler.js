

const fs = require('fs')
const {URLSearchParams} = require('url');

const  requestHandler = (req,res) =>{

  console.log('Request Received',req.url, req.method)

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
        <label for="name">First Name:</label><br>
        <input type="text" id="fname" name="fname" required><br><br>
        <label for="name">Last Name:</label><br>
        <input type="text" id="lname" name="lname" required><br><br>

       
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

    req.on('end', () => {
      const body = Buffer.concat(arr).toString();
      console.log(body);
  
      const urlParams = new URLSearchParams(body);
      const bodyJson = {};
  
      for (const [key, value] of urlParams.entries()) {
          bodyJson[key] = value;
      }
  
      console.log(bodyJson);
      const jsonStringfy = JSON.stringify(bodyJson);
  
      // Use fs.writeFile correctly with error handling and ensure res.end() is called only once
      fs.writeFile('buy.txt', jsonStringfy, (err) => {
        // Regardless of whether there's an error or not, send the response after file write completes
        res.statusCode = 302;  // Set redirection status
        res.setHeader('Location', '/product');  // Redirect to '/product'
        res.end();  // End the response
        console.log('File written and response sent');
    });
    
  
})}



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
  res.end()
}

}

module.exports = requestHandler;