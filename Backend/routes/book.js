const express = require("express");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const bookCtrl = require("../controllers/book");
const router = express.Router();

router.post("/", auth, multer, bookCtrl.createBook);

module.exports = router;
