const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
    res.send("You requested an api service...");
    console.log("You have got an api request");
});

// router.post();

module.exports = router;
