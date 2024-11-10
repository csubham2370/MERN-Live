const { render } = require("ejs");
const Home = require("./../models/Home");
const Favourite = require("../models/favourites");

exports.getIndex = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render("store/index", { homes: registeredHomes, pageTitle: "Tumahara airbnb" });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render("store/homes", { homes: registeredHomes, pageTitle: "Tumahara airbnb" });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.id;
  Home.findById(homeId, home => {
    if(!home) {
      console.log("Home not found");
      return res.redirect('/homes');
    }
    else {
      console.log('Details page:',home.id, home);
      res.render("store/home-details", {home: home, pageTitle: "Home Details"});
    }
  });
};


exports.getFavourites = (req, res, next) => {
  Favourite.fetchAll(favouriteIds => {
    Home.fetchAll(registeredHomes => {
      const favouriteHomes = registeredHomes.filter(home => 
        favouriteIds.some(fav => fav.Id === home.id.toString())
      );
      console.log('Favourite IDs:', favouriteIds);
      console.log('Filtered Homes:', favouriteHomes);
      res.render("store/favourites", { homes: favouriteHomes, pageTitle: "Favourites" });
    });
  });
};


exports.postAddFavourites = (req,res,next) =>{
 console.log(req.body);
 const homeId = req.body;
 console.log("my id",homeId)
 Favourite.addToFavourites(homeId, error =>{
  if(error){
    console.log("Error while adding to favourites",error);
  }
  res.redirect('/favourites')
 })
 
};
