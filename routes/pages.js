const express = require("express");
const loggeedin = require("../controllers/loggedin")
const router = express.Router();

router.get("/", loggeedin, (req, res) => {
    if (req.user) {
        if (req.user.role === 1) {
            res.render("index", {status:"loggedin", user:req.user});
        }
        else if (req.user.role === 2) {
            res.render("reports", {status:"loggedin", user:req.user});
        }
        else if (req.user.role === 3) {
            res.render("new_report", {status:"loggedin", user:req.user});
        }
    }
    else {
        res.sendFile("login.html", {root: "./public/"});
    }
})

router.get("/new_report", loggeedin, (req, res) => {
    res.render("new_report", {status:"loggedin", user:req.user});
})

router.get("/report", loggeedin, (req, res) => {
    res.render("report", {status:"loggedin", user:req.user});
})

router.get("/reports", loggeedin, (req, res) => {
    res.render("reports", {status:"loggedin", user:req.user});
})

router.get("/users", loggeedin, (req, res) => {
    res.render("users", {status:"loggedin", user:req.user});
})


router.get("/register", (req, res) => {
    res.sendFile("register.html", {root: "./public"});
})

router.get("/login", (req, res) => {
    res.sendFile("login.html", {root: "./public/"});
})

module.exports = router;