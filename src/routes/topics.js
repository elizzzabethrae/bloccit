const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const topicController = require("../controllers/topicController");
const validation = require("./validation");

router.get("/topics", topicController.index);
router.get("/topics/new", topicController.new);
router.post("/topics/create", topicController.create);
router.get("/topics/:id", topicController.show);
router.post("/topics/:id/destroy", topicController.destroy);
router.get("/topics/:id/edit", topicController.edit);
router.post("/topics/:topicId/posts/:id/destroy", postController.destroy);
router.post("/topics/:id/update", topicController.update);
//moved this to posts.js, is that right????



module.exports = router;
