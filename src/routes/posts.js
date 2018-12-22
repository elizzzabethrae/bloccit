const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController")
module.exports = router;

router.get("/topics/:topicId/posts/new", postController.new);
