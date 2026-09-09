const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("hello world\n")
        res.write("Chitkara world\n")
        res.end("Welcome to HomePage") // can't edit after res.end() 
        // res.write("Trying new line")
    }
    else if(req.url=="/about"){
        res.end("Welcome to About Page")
    }
    else if(req.url=="/contact"){
        res.end("Welcome to Contact Page")
    }
    else if(req.url=="/cart"){
        res.end("Welcome to Cart Page")
    }
    else if(req.url=="/product"){
        res.end("Welcome to Product Page")
    }
    else res.end("Server is Created")
})

server.listen(8080,()=>{
    console.log("Server is started in http://localhost:8080/")
})


// npm ==> node package manager ==>