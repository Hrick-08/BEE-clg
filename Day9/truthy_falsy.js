// // console.log(Boolean(1)); truthy



// // undefined, null, "", 0, NaN, false  ----------> except these 6 values all values are truthy




// console.log(true+ 6)   //true ->1, false -> 0;

// //  Type Conversion

// let a = 50; //number
// let s = String(a); //converted
// console.log(typeof a); //number
// console.log(typeof s); //string
// console.log(s) //"50"


// let str = "3"; //string
// let num = Number(str) // number
// console.log( typeof num) //number



// let bool = "true"; //String
// let res = Boolean(bool);      // boolean


// console.log(typeof("5" + 5)) //string -> 55
// console.log(7 - "2") //5, converted to number
// console.log(4*"a") //Nan
// console.log("a"+"a")  //aa
// console.log("5"*5) //25


// let cur = "400 Rs.";  //number should be in starting
// console.log(parseInt(cur)); //extract 400



// let numString = "5678";
// let number =+(numString)  //convert to number
// console.log(number) //5678 integer

// // _________________________________________



// let x  = false;
// let y = 0;
// let z = null;

// console.log(x || y || z) // if all the values are false, then the last falsy value, i.e. z will be returned, if we interchange values of x and z, then false will be returned as last value i.e. in z, there will be false;



// // _________________________________________


// let m= false;
// let n = "Vivek"
// let o = "rishi"

// let k = (m || n|| o); // wherever  it find first true, it will return first true.  
// console.log(k)


// // ____________________________


// let f = "Vivek"
// let g = "Akash"

// console.log(f||g); //Vivek



// // __________________________________________


// if all values are true here then && will return last truthy value,

// let a = "a"
// let b = "afsf"
// let c = "Ssfsf"

// console.log(a && b && c)


// // usecase-> React, authentication
// // isAuthenticated && isAdmin && ShowUI

// // _________________________


// let m = 0;
// let n = "abc";
// let o = "rishu"

// console.log(m && n && o); //0, as and operator got first false value 


// __________________________

// Nullish coalision Operator

// ??

// let user ;
// console.log(user ?? 'Loading...')
// works for undefined and null, if the  user is undefined or null, it will show the following message, same as alt  of img tag

// for(let i=0; i<5; i++){
//     console.log("Hello World")
// }

let obj = {
    name: "Aman",
    age: 22,
    address: "Shimla"
}

for(let key in obj){
    console.log(key)
    console.log(obj[key])
}

