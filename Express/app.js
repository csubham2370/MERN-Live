// const http = require('http');
const express = require('express');

const app = express();

// First middleware to log request details
app.use((req, res, next) => {
  console.log("1st middleware", req.url, req.method);
  next(); // Pass control to the next middleware or route handler
});


app.use('/test',(req, res, next) =>{

  console.log("2nd middleware", req.url, req.method);

  res.send('<h1>Subham</h1>')

  // next(); // Pass control to the next middleware or route handler

})

// // Route handler for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello, world!'); // Send a response back to the client
// });

// const server = http.createServer(app);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
