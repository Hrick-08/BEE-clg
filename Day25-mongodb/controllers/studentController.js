const {Student} = require('../models/studentModel');

const createStudent = async (req, res) => {
  try {
    const data = await Student.create(req.body);
    res.status(200).send({
        message: "Student created successfully", 
        data 
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).send({
      message: "Students retrieved successfully",
      data
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Student.findByIdAndDelete(id);
    res.status(200).send({
      message: "Student deleted successfully",
      data
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { createStudent, getStudents, deleteStudent };
