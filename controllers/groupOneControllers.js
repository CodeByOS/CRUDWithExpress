const GroupOne = require("../models/groupOneModels");

//* GET ALL STUDENTS FROM GROUP ONE
const getAllGroupOneStudents = async (req, res) => {
  try {
    const students = await GroupOne.find();

    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }

    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server error: Cannot GET students", failed: error.message });
  }
};


module.exports = getAllGroupOneStudents;
