const express = require('express');
const storeRouter = express.Router()
const path = require('path')
const rootDir = require('../path/path-utils')


const {  home } = require('./hostrouter');
storeRouter.get('/',(req, res, next) =>{
  console.log(home)
  res.render('index',{homes:home, pageTitle: 'Sc | Airbnb'})
})

module.exports = storeRouter;