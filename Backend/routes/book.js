const express = require("express");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const bookCtrl = require("../controllers/book");
const router = express.Router();

router.post("/", auth, multer, bookCtrl.createBook);
router.get("/", bookCtrl.getAllBooks);
router.get("/:id", bookCtrl.getOneBook);
router.get("/bestrating", bookCtrl.getBestBook);

module.exports = router;
