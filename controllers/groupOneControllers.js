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

//* Add A Student To Group One
const addStudentToGroupOne = async (req, res) => {
  try {
    const student = await GroupOne.create(req.body);
    if(!student) res.status(400).json({ message: "Failed to Create Student..!" });

    res.status(200).json({ message: "Student Created Successfuly..!", student });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


module.exports = {
  getAllGroupOneStudents,
  addStudentToGroupOne
};
