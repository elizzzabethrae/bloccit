const Advertisement = require("./models").Advertisement;

module.exports = {

//#1
  getAllAdvertisement(callback){
    return Advertisement.all()

//#2
    .then((advertisement) => {
      callback(null, advertisement);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
