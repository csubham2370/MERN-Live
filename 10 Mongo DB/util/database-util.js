const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://csubham981:root@mern.pjgnj.mongodb.net/?retryWrites=true&w=majority&appName=MERN'

let _db;

const mongoConnect = (callback) =>{
  MongoClient.connect(url).then((client) =>{
    console.log(client);
    _db = client.db('airbnb');
    callback();
  })
  .catch(error =>{
    console.log('Error came while connecting to mongoDB',error);
  })
}

const getDb = () =>{

  if(!_db){
    throw new Error('could not connect to db');
  }
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

