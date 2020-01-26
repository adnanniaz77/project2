const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
    db.User.findAll({
        include: [db.Post]
    }).then(users => res.json(users));
});

router.post("/new", (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => {
        res.json(newUser);
    });
});

module.exports = router;
