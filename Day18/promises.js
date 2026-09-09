// Javascript is a single threaded language
// Synchronous programming 

console.log("Start")

// I want to get some data from API

// let fetchData=async()=>{
//     let resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let json_data = await resp.json();
//     console.log(json_data);
// }
// fetchData()


// let resp = fetch("https://dummyjson.com/products/1").then(response=>{
//     return (response.json());
// }).then(json_data=>{
//     console.log(json_data);
//     return fetch("https://dummyjson.com/recipes/1");
// }).then(response=>{
//     return response.json()
// }).then(json_recipes=>{
//     console.log(json_recipes);
// })
// .catch(error=>console.log(error));


// fetch=> consume some time
// => js gives this task to browser
// => this will return promise

// Promise==>
// It is javascript object which will 
// represent completion or rejection 
// of any operation

// Replies in three state
// Pending ==> data  is giving to avail at some time
// Sucess ==> order is fullfilled
// Rejct==> when any error comes 
// console.log("end")


let ownPromise = new Promise((resolve,reject)=>{
    let status =false
    if(status){
        resolve("Promise is resolved")
    }else{
        reject("Promsie is rejected")
    }
})
ownPromise.then((resp)=>console.log(resp))
    .catch((error)=>console.log(error))
console.log("end")

