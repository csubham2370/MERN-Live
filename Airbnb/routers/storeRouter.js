const express = require('express');
const storeRouter = express.Router()
const path = require('path')
const rootDir = require('../path/path-utils')
storeRouter.get('/',(req, res, next) =>{
  res.sendFile(path.join(rootDir, "views","index.html"))
})

module.exports = storeRouter;