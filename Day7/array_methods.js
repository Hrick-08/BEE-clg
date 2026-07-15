// let arr = [2, 3, 4, 5, 6];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//foreach, map, filter, reduce => higher order functions (HOR) [A func that takes another func as arg]

//forEach

// arr.forEach((i) => {
//     console.log(i);
//     // process.stdout.write(element.toString()+" ");
// });

//map

// let sq = arr.map((i)=>i**2);
// console.log(sq)

// let products = [
//     {"name":"Iphone-15", "price": 70000},
//     {"name":"Samsung-Galaxy S24", "price": 90000},
//     {"name":"Motorola", "price": 20000},
// ]

// let prices = products.map((el)=>el.price);
// console.log(prices)

// let names = products.map((el)=>el.name.toUpperCase())
// console.log(names)

//filter

// let num = [30,12,14,15,7,18,23,27];

// let even = num.filter((el) => {
//     return el%2==0
// });
// console.log(even)

// let evenTrue = num.map((el) => {
//     return el%2==0
// });
// console.log(evenTrue)

//reduce => it will perform a certain math operation on your array and returns a single val

// let numbers = [10,50,20];

// let result = numbers.reduce((acc, el)=>{
//     return acc+el
// })
// // accumular => starting val of any result

// console.log(result);

let ages = [10,2,6,30,40];
// 1 2 3 40 6

// console.log(ages.sort())

//.sort() = > modifies original array

let sortedAges = ages.sort((a,b)=>a-b);
console.log(sortedAges);

let sortedAgesDesc = ages.sort((a,b)=>b-a);
console.log(sortedAgesDesc);

