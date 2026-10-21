const {createStudent, getStudents, deleteStudent} = require("../controllers/studentController.js");

const express = require("express");
const router = express.Router();

router.post("/students", createStudent);
router.get("/students", getStudents);
router.delete("/students/:id", deleteStudent);

module.exports = { routes : router };