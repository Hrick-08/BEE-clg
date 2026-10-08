const express = require("express");
const fs = require("fs");
const { json } = require("stream/consumers");

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

app.post('/users', (req,res)=>{
    const data = fs.readFileSync("./db.json");
    const users = JSON.parse(data).users;
    const newUser = {...req.body, id: users.length + 1};
    const check_user = users.some(user => user.email === newUser.email);
    if(check_user){
        res.status(400).send({"message": "User with this email already exists!"});
    }
    else {
        users.push(newUser);
        fs.writeFileSync("./db.json", JSON.stringify({users}));
        res.send({"message": "User added successfully!"});
    }
});

app.get('/users/:id', (req,res)=>{
    const data = fs.readFileSync("./db.json");
    const users = JSON.parse(data).users;
    const user = users.find(user => user.id == req.params.id);
    if(user){
        res.send(user);
    }
    else {
        res.status(404).send({"message": "User not found!"});
    }
});

app.delete('/users/:id', (req,res)=>{
    const userId = parseInt(req.params.id);
    const data = fs.readFileSync("./db.json","utf-8");
    let users = JSON.parse(data).users;
    // const find_user = users.find((user)=> user.id==userId);
    users = users.filter((user)=> user.id != userId);
    fs.writeFileSync("./db.json", JSON.stringify({users}));
    res.send({"message":`user with ${userId} deleted`});
})

app.put('/user/:id', (req,res)=>{
    const userId = req.params.id;
    const data = fs.readFileSync("./db.json","utf-8");
    let users = JSON.parse(data).users;
    const find_user = users.find((user)=> user.id==userId);
    if(find_user){
        find_user.name = req.body.name;
        find_user.email = req.body.email;
        fs.writeFileSync("./db.json", JSON.stringify(users));
        res.send("User updated successfully!");
    }
    else{
        res.send("User doesn't exist");
    }
})

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000/")
});
