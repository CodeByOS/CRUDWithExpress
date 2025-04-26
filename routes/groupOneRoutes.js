const express = require("express");
const router = express.Router();
const { getAllGroupOneStudents, addStudentToGroupOne, getStudentByID, updateStudentInfo }  = require("../controllers/groupOneControllers");


router.get("/", getAllGroupOneStudents);
router.post("/", addStudentToGroupOne);
router.get("/:id", getStudentByID);
router.patch("/:id", updateStudentInfo);
// router.delete("/:id", deleteStudentByID);

module.exports = router;
