const fs=require('fs')
// // const data=fs.readFileSync("student.txt")
// const data=fs.readFileSync("student.txt","utf-8")
// // console.log(data.toString())
// console.log(data)
// console.log("start")
// fs.readFile("student.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Error is", err)
//     }
//     console.log(data)
// })
// console.log("End")

// fs.unlink("student.txt",(err)=>{
//     if(err){
//         console.log("Error is", err)
//     }
//     console.log("File is deleted")
// })

fs.mkdir("college",(err)=>{
    if(err){
        console.log("Error is", err)
    }
    console.log("Folder is created")
})

fs.readdir("college",(err,files)=>{
    if(err){
        console.log("Error is", err)
    }
    console.log(files)
})
