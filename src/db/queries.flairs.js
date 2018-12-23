const Flair = require("./models").Flair;

module.exports = {

//#1
  getAllFlairs(callback){
    return Flair.all()

//#2
    .then((flairs) => {
      callback(null, flairs);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
