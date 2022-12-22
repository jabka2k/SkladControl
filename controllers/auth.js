const express = require("express");

const users = require("./users");
const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const new_report = require("./new_report");
const report = require("./report");
const reports = require("./reports");
const change_status = require("./change_status");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout)
router.post("/new_report", new_report);
router.get('/reports', reports);
router.get('/report', report);
router.post('/change_status', change_status);
router.get('/users', users);


module.exports = router;