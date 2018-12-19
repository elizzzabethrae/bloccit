const advertisementQueries = require("../db/queries.advertisements.js");


module.exports = {
  index(req, res, next){

    advertisementQueries.getAllAdvertisements((err, advertisements) => {


          if(err){
            console.log(err);
            res.redirect(500, "static/index");
          } else {
            res.render("advertisement/index", {advertisement});
          }
        })

  }
}
