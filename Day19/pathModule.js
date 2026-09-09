// Common Module
// ES6 module

// const filepath=require("./college/new_folder/student.js")
// \/
// user ==> macos/linux 

const path=require("path")

const filePath=path.join("college","new_folder","student.js")
console.log(filePath)
console.log(path.basename(filePath))

