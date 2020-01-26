const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    res.send("User Routes");
});

router.post("/new", (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => {
        res.json(newUser);
    });
});

module.exports = router;
