const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api", (req, res) => {
    res.send("You requested an api service...");
    console.log("You have got an api request");
});

router.post("/new", (req, res) => {
    db.User.create({
        name: req.body.name
    }).then(() => {
        res.end();
    });
});

module.exports = router;
