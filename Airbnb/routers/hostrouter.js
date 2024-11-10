const express = require('express');

const hostRouter = express.Router();

const path = require('path');

const rootDir = require('../path/path-utils')
hostRouter.get('/add-home',(req, res, next) =>{

  res.sendFile(path.join(rootDir, "views", "Add-Home.html"))
})

hostRouter.post('/add-home',(req, res, next) =>{
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "Home-added.html"))

})

module.exports = hostRouter;