const Favourite = require("../models/Favourite");
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      homes: registeredHomes,
      pageTitle: "Tumahara airbnb",isLoggedIn:  req.session.isLoggedIn
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then(registeredHomes=> {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Tumahara airbnb",isLoggedIn:  req.session.isLoggedIn
    });
  });
};

// exports.getFavourites = (req, res, next) => {
//   Favourite.find().then((favouriteIds) => {
//     Home.find().then((registeredHomes) => {
//       favouriteIds = favouriteIds.map((favId) => favId.homeId.toString());

//       console.log(favouriteIds, registeredHomes);
//       const favouriteHomes = registeredHomes.filter((home) =>
//         favouriteIds.includes(home._id.toString())
//       );
//       res.render("store/favourites", {
//         homes: favouriteHomes,
//         pageTitle: "Favourites",
//       });
//     });
//   });
// };

exports.getFavourites = (req, res, next) => {
  Favourite.find()
    .populate('homeId')
    .then((favHomes) => {
      // Filter out any null homeId entries and map to the home objects
      const favouriteHomes = favHomes
        .filter(fav => fav.homeId !== null)
        .map(fav => fav.homeId);
      
      console.log('Favourite Homes:', favouriteHomes);
      
      res.render("store/favourites", {
        homes: favouriteHomes,
        pageTitle: "Favourites",isLoggedIn:  req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log('Error fetching favourites:', err);
      res.redirect('/');
    });
};

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite({ homeId: homeId });
  console.log('My Favourite:', fav);
  fav.save()
    .then(() => {
      res.redirect('/favourites')
    })
    .catch(err => {
      console.log("Error with add to favourites", err);
      res.redirect('/favourites');
    });
};

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({homeId})
  .then(() =>{
    res.redirect('/favourites');
  }).catch(err =>{
    console.log("Error while delete to favourites", err);
    res.redirect('/favourites');
  })
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId).then(home => {
    
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail",isLoggedIn:  req.session.isLoggedIn });
  });
};
