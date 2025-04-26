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

//* Get student By ID
const getStudentByID = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await GroupOne.findById(id);
    if(!student) res.status(400).json({ message: "Cannot Found This Student..!" });

    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//* Update Student BY ID
const updateStudentInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await GroupOne.findByIdAndUpdate(id, req.body);
    if(!student) res.status(400).json({ message: "Failed to update The student Informations..!" });

    res.status(200).json({ message: "Student Updated Successfuly.." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


module.exports = {
  getAllGroupOneStudents,
  addStudentToGroupOne,
  getStudentByID,
  updateStudentInfo
};
