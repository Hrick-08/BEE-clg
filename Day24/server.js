const express=require('express')
const app =express()
const bcrypt=require('bcrypt') // for hashing password
const jwt = require("jsonwebtoken");
const SECRET_KEY="passkey"
app.use(express.json())

app.get("/",(req,res)=>{
    res.send({"message": "Welcome to home page"})
})

let user={} // temporary database

app.post("/register",async(req,res)=>{
    const {email,password}=req.body
    user={
    useremail:email,
    userpassword:await bcrypt.hash(password, 10)
    }
    //bcrypt.hash(originalpw,salt_rounds) 
    // salt_rounds=>10==>very strong complex password
    //              1==> less complex password
    res.send(`${JSON.stringify(user)} registered successfully`)
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    if(email!==user.useremail){
        res.send({"message": "Email does not exist"})
    }
    const check_user=await bcrypt.compare(password,user.userpassword)
    //bcrypt.compare return true and dalse
    if(!check_user){
        res.send({"message": "Password does not match"})
    }
    //jwt.sign(payload,secret_key,options)
    //payload==> information that you want to share with cilent (email,id)
    //secret_key==> any random string that is used to encrypt the payload
    //Expiry time==> time after token expriss
    const token=jwt.sign({email: user.useremail}, SECRET_KEY, { expiresIn: '1h' });
    res.send({"message": "User logged in successfully", "token": token});

})
const authmiddleware=(req,res,next)=>{
    const header=req.headers.authorization
    const token=header.split(" ")[1]
    // console.log(header)
    const decode=jwt.verify(token,SECRET_KEY)
    // console.log(token)
    console.log(decode)
    if(decode){
        req.body=decode.email
        next()
    }else{
        res.send("Invalid token")
    }
}

app.get("/profile",authmiddleware,(req,res)=>{
    res.send({
        "message": "Welcome to account page",
        "user": req.body
    })
})

app.get("/account",authmiddleware,(req,res)=>{
    res.send({"message": "Welcome to account page"})
})

app.listen(8000,()=>{
    console.log("Server is running on http://localhost:8000")
})