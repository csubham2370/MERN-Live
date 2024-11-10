const Home = require('./../models/Home')

// Export the function to render 'Add-Home' page
exports.getAddHome = (req, res, next) => {
  res.render('Add-Home', { pageTitle: 'Add Home' });
};

// Export the function to handle POST request and render 'Home-added' page
exports.postAddHome = (req, res, next) => {
  const {homeName, price, location, rating, photoUrl} = req.body;
  const newHome = new Home(homeName, price, location, rating, photoUrl);

  newHome.save(error => {
    if (error) {
      console.log('file not write')
      res.redirect('/');
    } else {
      res.render("Home-added", {pageTitle: 'Home Hosted'});
    }
  });
};

