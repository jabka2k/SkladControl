const express = require("express");
const loggeedin = require("../controllers/loggedin")
const router = express.Router();

router.get("/", loggeedin, (req, res) => {
    if (req.user) {
        res.render("reports", {status:"loggedin", user:req.user});
    }
    else {
        res.sendFile("login.html", {root: "./public/"});
    }
})

router.get("/register", (req, res) => {
    res.sendFile("register.html", {root: "./public"});
})

router.get("/login", (req, res) => {
    res.sendFile("login.html", {root: "./public/"});
})

module.exports = router;