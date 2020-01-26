const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    res.send("Post Routes");
});

module.exports = router;
