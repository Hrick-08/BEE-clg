const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.send({"message":"Welcome to your Express Application!"});
});

app.get('/users', (req,res)=>{
    // const users = require("./db.json");
    const data = fs.readFileSync("./db.json");
    const users = JSON.parse(data).users;
    res.send(users);
});

app.post("/users", (req,res)=>{
    console.log(req.body);
    res.send("user sumbitted successfully!");
});

// app.post('/users', (req,res)=>{
//     const data = fs.readFileSync("./db.json");
//     const users = JSON.parse(data).users;
//     const newUser = req.body;
//     users.push(newUser);
//     fs.writeFileSync("./db.json", JSON.stringify({users}));
//     res.send({"message": "User added successfully!"});
// });

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000/")
});
