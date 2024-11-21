// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const {authRouter} = require('./routers/authRouter')
const rootDir = require("./util/path-util");
const errorController = require('./controllers/errorController');



const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) =>{
  req.isLoggedIn =req.get('cookie').split('=')[1] === 'true';
  next();
});
app.use(storeRouter);

app.use('/host',(req, res, next) =>{
  if(!req.isLoggedIn){
    return res.redirect('/login')
  }
  next();
})
app.use("/host", hostRouter);
app.use(authRouter);

app.use(errorController.get404);
const mongooes = require('mongoose')
const MONGO_DB_URL = "mongodb+srv://csubham981:root@mern.pjgnj.mongodb.net/airbnb?retryWrites=true&w=majority&appName=MERN";

const PORT = 3002;
mongooes.connect(MONGO_DB_URL).then(() =>{
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
});