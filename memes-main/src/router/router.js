const express = require("express");
const router = express.Router();
const { class1 } = require("../controller/controller");

var { upload , upload2 } = require('../middleware/schema');

router.get("/single", class1.a)
router.post("/single",upload.single('add'), class1.b)

router.get("/multiple", class1.c)
router.post("/multiple",upload2.array('add2', 100 ), class1.d)

module.exports = router;
