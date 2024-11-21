const express = require("express")
const authController = require('../controllers/authController')
const authRouter = express.Router();

authRouter.get('/login', authController.getlogin);
authRouter.post('/login',authController.postlogin);
authRouter.post('/logout', authController.postlogout);
authRouter.get('/signUp', authController.getSignup);
authRouter.post('/signUp', authController.postSignup);
exports.authRouter = authRouter;