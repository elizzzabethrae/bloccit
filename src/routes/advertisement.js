const express = require("express");
const router = express.Router();

const topicController = require("../controllers/advertisementController")

router.get("/advertisement", advertisementController.index);

module.exports = router;
