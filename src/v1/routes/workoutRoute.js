const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get all workouts");
});

router.get("/:workoutId", (req, res) => {
    res.send("Get workout");
});

router.post("/", (req, res) => {
    res.send("Add workout");
});

router.put("/:workoutId", (req, res) => {
    res.send("Update workout");
});

router.delete("/:workoutId", (req, res) => {
    res.send("Delete workout");
});

module.exports = router;