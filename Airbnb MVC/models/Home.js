

module.exports = class Home {

  constructor(homeName, price, location, rating, photoUrl){
  
    this.homeName = homeName;
    this.price = price;
    this.location =location;
    this.rating = rating;
    this.photoUrl = photoUrl;

  }
  save() {

    home.push(this);
   console.log(req.body)
   
    fs.writeFile(homeFilePath, JSON.stringify(home),error =>{

      if (error) {

        console.log('Error while writing data', error);
      }
    })


  }

 static fetchAll(){

    return home;
  }
}



