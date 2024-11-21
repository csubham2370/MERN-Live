const mongooes = require('mongoose');

const homeSchema = mongooes.Schema({

  houseName : {type: String,require : true },
  price : {type:Number, require : true },
  location: {type: String, require : true },
  rating : {type: Number, require : true },
  photoUrl :String,
  description : String,



})

module.exports = mongooes.model('Home', homeSchema)