const express = require('express');

const hostRouter = express.Router();

const path = require('path');

const rootDir = require('../path/path-utils')
const home = [];
hostRouter.get('/add-home',(req, res, next) =>{
  

  res.render('Add-Home',{ pageTitle: 'Add Home'})
})

hostRouter.post('/add-home',(req, res, next) =>{
  
  home.push(req.body);

  res.render('Home-added', {pageTitle: "Home added"})

})

exports.hostRouter = hostRouter;
exports.home = home;
