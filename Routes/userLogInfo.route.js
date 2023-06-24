const express = require("express");
const { route } = require("../app");
const userController = require("../Controllers/userLogInfo.controller");
const veryfyToken = require("../Middleeare/veryfyToken");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.get("/loginInfo", veryfyToken, userController.getMe);

module.exports = router;
