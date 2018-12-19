const Advertisement = require("./models").advertisement;

module.exports = {

//#1
  getAllAdvertisment(callback){
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
