const postQueries = require("../db/queries.posts.js");

module.exports = {

  new(req, res, next){
    res.render("posts/new", {topicId: req.params.topicId});
  },

}
