const express = require("express");
const router = express.Router();

const advertisementController = require("../controllers/advertisementController")

router.get("/advertisement", advertisementController.index);

module.exports = router;
