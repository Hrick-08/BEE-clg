// Nested Objects ==> Api response

// let student={
//     name:"Rahul",
//     age:21,
//     address:{
//         city:"Delhi",
//         state:"Delhi",
//         pincode:11001
//     }
// }
// console.log(student.address.pincode);

// let respone={
//     success:true,
//     user:{
//         name:"rahul",
//         email:"rahul@gmail.com",
//         address:{
//             city:"Delhi",
//             country:"India"
//         }
//     }
// }
// console.log(respone.user.address.country)
// let student={
//     name:"Rahul",
//     age:21,
//     city:"Delhi"
// }

// let {name:studentName,age,city}=student
// console.log(studentName)
// console.log(age)
// console.log(city)

let student={
    name: "Rahul",
    age: 21,
    city: "Delhi",
    id:{
        adhaar: 123456789,
        pan: "ABCDE1234F"
    }
}

console.log(student)
console.log(student.id.adhaar)
console.log(student.id.pan)

let {name,age,city,id:{adhaar,pan}}=student
console.log(name)
console.log(age)
console.log(city)
console.log(adhaar)
console.log(pan)

