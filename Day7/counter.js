//setInterval
// console.log("start")
// setTimeout(()=>{
//     console.log("Getting executed after 3 seconds")
// },3000)

// console.log("end")

//setInterval--> this will perform certain task repeatedly after specfic time 

let counter = document.getElementById("counter");

let id;
let count = 0;

id = setInterval(() => {
    count++;
    counter.innerHTML=count;
    if(Number(count)==3){
        clearInterval(id);
    }
},1000)

