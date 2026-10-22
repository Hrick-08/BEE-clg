const {createStudent, getStudents, deleteStudent, getSingleStudent, updateStudent} = require("../controllers/studentController.js");

const express = require("express");
const router = express.Router();

router.post("/students", createStudent);
router.get("/students", getStudents);
router.delete("/students/:id", deleteStudent);
router.get("/students/:id", getSingleStudent);
router.put("/students/:id", updateStudent);

module.exports = { routes : router };