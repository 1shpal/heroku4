const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.post("/place",orderController.place);
router.get("/view/:uid",orderController.view);

module.exports = router;