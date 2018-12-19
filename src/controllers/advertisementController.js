const advertisementQueries = require("../db/queries.advertisement.js");


module.exports = {
  index(req, res, next){

    advertisementQueries.getAllAdvertisement((err, advertisement) => {


          if(err){
            console.log(err);
            res.redirect(500, "static/index");
          } else {
            res.render("advertisement/index", {advertisement});
          }
        })

  }
}
