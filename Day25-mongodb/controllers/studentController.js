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

const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Student.findById(id);
    if (!data) {
      return res.status(404).send({ message: "Student not found" });
    }
    res.status(200).send({
      message: "Student retrieved successfully",
      data
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Student.findByIdAndUpdate(
      id,
      req.body,
      {
        returnDocument: 'after'
      }
    );

    if (!data) {
      return res.status(404).send({
        message: "Student not found"
      });
    }

    res.status(200).send({
      message: "Student updated successfully",
      data
    });
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
};

module.exports = { createStudent, getStudents, deleteStudent, getSingleStudent, updateStudent };