

const express = require('express')
const fs= require('fs')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded());

app.use((req,res,next)=>{

  console.log('Request Recived.',req.url, req.method, req.body)
  next()
 
 
})

app.get('/',(req,res,next)=>{

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UserData</title>
</head>
<body>
  <form action="/user-data" method="POST">
    <label for="fname">First Name</label>
    <input type="text" name="fname" required><br>
    <label for="lname">Last Name</label>
    <input type="text" name="lname" required><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>`)
  
})

app.post('/user-data',(req, res, next) =>{

  fs.writeFile('data.json',JSON.stringify(req.body), err =>{

    res.statusCode = 302;
    res.setHeader('Location', '/product')
    res.end();
  })

  
})

app.get('/product',(req, res, next)=>{

  res.send(`<h1>User data was collected...</h>`)


})

app.use((req, res,next)=>{

  req.statusCode =404;
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page not found | 404</title>
</head>
<body>
  <h1>Page not found | 404</h1>
</body>
</html>`)
res.end();

})

const PORT = 3000;

app.listen(PORT, ()=>{

  console.log(`Server is running on port http://localhost:${PORT}`)
})