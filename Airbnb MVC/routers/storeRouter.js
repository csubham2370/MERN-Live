const express = require('express');
const storeRouter = express.Router()
const path = require('path')
const rootDir = require('../path/path-utils')

const storeController = require('./../controllers/storeController')

storeRouter.get('/', storeController.getHome);

module.exports = storeRouter;