// fs==> this module handles files

const fs = require('fs')
console.log("start")
// read,write,append,delete
let text="student Name : Aman "
fs.writeFileSync("student.txt", "Another Student Added")
// fs.writeFile("student.txt", text,(err)=>{
//     if(err){
//         console.log("Error is", err)
//     }
//     console.log("file is created")
// })
console.log("end")