
const Home = require('./../models/Home')
exports.getHome = (req, res, next) =>{
  let home = Home.fetchAll();
  res.render('index',{homes:home, pageTitle: 'Sc | Airbnb'})
}