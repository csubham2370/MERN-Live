const mongooes = require("mongoose");

const userSchema = mongooes.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  userType: {type:String, enum: ['guest','host'], require: true}



});

module.exports = mongooes.model("User", userSchema);
