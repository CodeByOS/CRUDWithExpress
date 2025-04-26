const express = require("express");
const router = express.Router();
const getAllGroupOneStudents  = require("../controllers/groupOneControllers");


router.get("/", getAllGroupOneStudents);
// router.post("/", createStudent);
// router.get("/:id", getStudentByID);
// router.patch("/:id", updateStudentInfo);
// router.delete("/:id", deleteStudentByID);

module.exports = router;
