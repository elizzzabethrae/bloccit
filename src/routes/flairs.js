const express = require("express");
const router = express.Router();

const flairController = require("../controllers/flairController")

router.get("/flairs", flairController.index);

module.exports = router;
