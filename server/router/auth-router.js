const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const loginSchema = require("../validators/login-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").get(validate(loginSchema), authcontrollers.login);

module.exports = router;