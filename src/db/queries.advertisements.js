const Topic = require("./models").Advertisement;

module.exports = {

//#1
  getAllAdvertisements(callback){
    return Advertisement.all()

//#2
    .then((advertsements) => {
      callback(null, advertisements);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
