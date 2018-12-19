const Advertisement = require("./models").Advertisement;

module.exports = {

//#1
  getAllAdvertisements(callback){
    return Advertisement.all()

//#2
    .then((advertisements) => {
      callback(null, advertisements);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
