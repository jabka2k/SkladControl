const express = require("express");

const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const report = require("./report");
const reports = require("./reports")

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout)
router.post("/report", report);
router.get('/reports', reports)

module.exports = router;