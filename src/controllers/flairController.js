module.exports = {
  index(req, res, next){

    flairQueries.getAllFlairs((err, flairs) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("flairs/index", {flairs});
      }
    })

  }
}
