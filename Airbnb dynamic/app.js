
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

const { hostRouter } = require('./routers/hostrouter');
const storeRouter = require('./routers/storeRouter');

const rootDir = require('./path/path-utils')

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({extended:true}));

app.use(storeRouter);
app.use('/host',hostRouter)



app.use((req, res, next) =>{

  res.statusCode = 404;
res.sendFile(path.join(__dirname, "views", "404.html"));
})

const PORT = 3000;

app.listen(PORT, () =>{
  console.log(`The server is running on http://localhost:${PORT}`)
});