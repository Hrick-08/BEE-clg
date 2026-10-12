const express = require('express');
const app = express();
const bycrypt = require('bcrypt');

app.use(express.json());

app.get('/', (req, res) => {
    res.send({"message": "Hello, World!"});
});

let user = {};
app.post('/register', async (req, res) => {
    const {email, password} = req.body;
    user={
        useremail: email,
        userpassword: await bycrypt.hash(password, 10)
    }
    res.send(`${JSON.stringify(user)} registered successfully`);
});

app.post('/login', async (req, res) => {
    const {email, password } = req.body;
    if(user.useremail!= email){
        return res.status(400).send({"message": "User not found"});
    }
    else if(!await bycrypt.compare(password, user.userpassword)){
        return res.status(400).send({"message": "Invalid password"});
    }
    res.send({"message": "User logged in successfully"});
});

app.listen(3000, () => {
    console.log('Server is running in http://localhost:3000/');
});
