// // ES^ => 6th version of javascript. EcmaScript 2015.


// // introduced let const, arro functions, template literals, spread , rest , default parameter


// // template literals->
// let name = "Aman"
// let age = 28

// // this was before es6 feature called template literal
// console.log("My name is"+ name +" and my age is"+age);  // too many plus signs here

// console.log(`My name is ${name}  my age is ${age}`);  


// // Destructuring
// let obj={
//     "moviename" : "Avataar",
//     "rating": 4.5

// }

// console.log(obj.moviename) //to avoide too many obj. writing, we destructure

// let {moviename, rating} = obj;
// // console.log(moviename); // Avataar
// console.log(rating); // 4.5

// let arr = [10,20,30,40];
// let [a,b,c] = arr;
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
// // console.log(d); // 40


// //spread operator(...)
// // spread operator copies all or parth of an existing array or object into  another array or object

// let arr1=[10,20,30]
// let arr2=arr1
// arr2.push(90)
// console.log(arr1)
// console.log(arr2)

// let arr3 = [40,50,60]
// let arr4 = [...arr3] // here we are copying arr1 and arr3 into arr4
// arr4.push(100)
// console.log(arr3) // [40,50,60]
// console.log(arr4) // [40,50,60,100]

// let fruits = ["apple", "banana", "mango"]
// let vegetables = ["tomato", "potato", "onion"]
// let food = [...fruits, ...vegetables]
// console.log(food) // ["apple", "banana", "mango", "tomato", "potato", "onion"]

// let user = {
//     name: "Aman",
//     age: 25
// }
// let newUser = {
//     ...user,
//     age:32
// }
// console.log(newUser)


// Rest operator(...)

// function calculateSum(a,...nums){
//     console.log(a,nums)
// }
// calculateSum(10,20,30,40,50,60)

// Default Parameter
function nationality (country="India"){
    console.log(`This person belongs to ${country}`)
}
nationality()
nationality("USA")

