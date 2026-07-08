// let arr=[
//     {"key":2,"name":"aman"},
//     {"key":3,"name":"partik"}
// ]

// console.log(arr[0].name)

// Call Back Function 
// when a function is passed as an argument to another function then it is called callback function

// function greetMessage(message){
//     message()//passing function as an argument

// }
// function greetWelcome(){
//     console.log("Welcome to chitkara")
// }
// greetMessage(greetWelcome)


// function calculate(a,b,operation){
//     operation(a,b)
// }

// function add(a,b){
//     console.log(a+b)
// }

// function prod(a,b){
//     console.log(a*b)
// }

// calculate(6,7,add)
// calculate(6,7,prod)

// h1.addEventListener("click",handleClick)


// setTimeout(function(){
//     console.log("Executed")
// }, 3000)

function executeDetails(id, callback){
    // console.log("start");
    setTimeout(()=>{
        // console.log("id:",id);
        callback();
    }, 2000);
}

// function authData(){
//     console.log("User logged in successfully");
// }

// executeDetails(1, authData);

// executeDetails(1, function(){
//     console.log("User authenticated successfully");
//     executeDetails(2, function(){
//         console.log("Post fetched");
//         executeDetails(3, function(){
//             console.log("Profile visited")
//         })
//     })
// })

//promises
executeDetails().then(getPosts)