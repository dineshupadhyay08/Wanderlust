const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utlls/wrapAsync.js");
const req = require("express/lib/request.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js")

router.get("/singup", userController.renderSignup);

router.post("/signup", wrapAsync(userController.sinup));


router.get("/login", userController.renderLoginForm);

router.post("/login", saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
}),
    userController.login
);

router.get("/logout", userController.logout);



module.exports = router;