const express = require("express");
const router = express.Router();
const userVerify = require("../middlewares/auth");
const LecturerController = require("../controllers/lecturerController");

router.get("/api/schedule", userVerify, LecturerController.getSchedule);

module.exports = router;
