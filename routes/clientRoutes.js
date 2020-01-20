const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.html"));
});

router.get("/search", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/search.html"));
});

module.exports = router;
