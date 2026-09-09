const fs= require('fs')
fs.appendFile("student.txt", "Another Student add ",(err)=>{
    if(err){
        console.log("Error is", err)
    }
    console.log("Data is appended")
})  
