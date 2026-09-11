const express = require("express");
const fs = require("fs")

const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Welcome to your Express Application!");
});

app.get("/students", (req,res)=>{
    const data = fs.readFileSync("students.json","utf-8");
    const students = JSON.parse(data);
    res.send(students);
});

// app.post("/students", (req,res)=>{
//     console.log(req.body);
//     res.send("Student sumbitted successfully!");
// });

app.post("/students", (req, res) => {
    const data = fs.readFileSync("students.json", "utf-8");
    const students = JSON.parse(data);
    console.log(students);
    const newStudent = {"id":students.length+1,...req.body};
    students.push(newStudent);
    fs.writeFileSync(
        "students.json",
        JSON.stringify(students)
    );
    res.send("Student submitted successfully!");
});

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000/")
});
