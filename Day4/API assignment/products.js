//Promise
//Api --> It is an interface through which system can communicate
//Api bring data from server to frontend
// https:fakeproducts.com-->raw data 
//fetch it will pull repsone form an api 

// fetch("url",[get,post,patch,delete])
let container = document.getElementById("container")

fetch("https://dummyjson.com/products").then(function (res) {
    return res.json()
}).then(function (data) {
    // console.log(data.products)
    for (el of data.products) {
        container.innerHTML += `
         <div>
            <img src="${el.images[0]}" >
            <h3>${el.title}</h3>
            <p>Brand :${el.brand}</p>
            <h3>Price :${el.price}</h3>
            <button class="cart-btn">add to cart</button>
            <button class="delete-btn">Delete</button>
        </div>
        `
    }
    let cartCount = 0
    let cartCountBtn = document.getElementById("cart-count")
    let cartbtn = document.querySelectorAll(".cart-btn")
    for (let el of cartbtn) {
        el.addEventListener("click", function () {
            cartCount += 1
            cartCountBtn.textContent = cartCount
        })
    }
    let deletebtns = document.querySelectorAll(".delete-btn")
    for (let el of deletebtns) {
        el.addEventListener("click", function () {
            el.closest('div').remove()
        })
    }
    
})

//fetch -->you will require 'then' method 2 times
// res-->raw json format data , we need to convert then into objects