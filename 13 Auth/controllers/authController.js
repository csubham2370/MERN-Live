const expressValidator = require('express-validator');
const { check } = require('express-validator');

const User = require('../models/User')
exports.getlogin = (req, res, next) => {
  
  res.render('auth/login', {pageTitle: 'Login', isLoggedIn: false});
}

exports.getSignup = (req, res, next) =>{

  res.render('auth/signUp', {pageTitle: 'SignUp', isLoggedIn: false});
}





exports.postSignup =[ 
  
  //first name validator
  check('firstName')
  .notEmpty()
  .withMessage('First name is required')
  .trim()
  .isLength({min: 2})
  .withMessage('First name mast be least 2 characters long')
  .matches(/^[a-zA-Z\s]+$/)
  .withMessage('First name can only contain English alphabets'),
  
  //Last name vlaidator
  
  check('lastName')
  .notEmpty()
  .withMessage('Last name is required')
  .trim()
  .isLength({min: 2})
  .withMessage('Last name mast be least 2 characters long')
  .matches(/^[a-zA-Z\s]+$/)
  .withMessage('Last name can only contain English alphabets'),

  //Email Validator
  check('email')
  .isEmail()
  .withMessage('Please enter a valid email')
  .normalizeEmail(),
  
  // Password Validator
  check('password')
  .trim()
  .isLength({min: 8})
  .withMessage('Password should be minium 8 chars')
  .matches(/[a-z]/)
  .withMessage('Password should have atleast one small alphabet')
  .matches(/[A-Z]/)
  .withMessage('Password should have atleast one capital alphabet')
  .matches(/[!@#$%^&*_":?]/)
  .withMessage('Password should have atleast one Special Character'),

//Comfirm  password
check('confirm_password')
.trim()
.custom((value, {req}) =>{

  if(value !== req.body.password)
{
  throw new Error ('Confirm password does not match password')
}
return true;

})

,

  // User Type Validator
  check('userType')
  .trim()
  .notEmpty()
  .withMessage('User type is required')
  .isIn(['guest', 'host'])
  .withMessage('User type is invalid'),

  // User Type Validator
  check('termsAccepted')
  .notEmpty()
  .withMessage('Terms and Conditions must be accepted')
  ,

  (req, res, next) =>{

  console.log('User came to signup :', req.body )

  const errors = expressValidator.validationResult(req);
  
  if(!errors.isEmpty()){
    return res.status(422).render('auth/signUp',
      {
      pageTitle: 'Login',
      isLoggedIn: false,
      errorMessages: errors.array().map(err => err.msg),
      oldInput: req.body
    })}

    const {firstName, lastName, email, password, userType} = req.body;
    const user = new User({firstName, lastName, email, password, userType});

    user.save().then(result => {
      console.log(result);
      res.redirect("/login");
    }).catch(error => {
      return res.status(422).render('auth/signUp', 
        {
          pageTitle: 'Login', 
          isLoggedIn: false,
          errorMessages: [error],
          oldInput: req.body,
        })
      });

}]

exports.postlogin = (req, res, next) =>{


  // res.cookie('isLoggedIn',true);
  req.session.isLoggedIn = true;
  res.redirect('/');
}

exports.postlogout = (req, res, next) =>{

  // res.cookie('isLoggedIn',false);
  req.session.destroy();
  res.redirect('/');
}