// const response = await fetch("https://dummyjson.com/products")
// const data = await response.json()
// console.log(data)

let container = document.querySelector(".products");

fetch("https://dummyjson.com/products").then(function(res){
    return res.json();
}).then(function(data){
    for(i of data.products){
        container.innerHTML+=`
        <div class="product">
            <h2>${i.title}</h2>
            <img src="${i.thumbnail}">
            <h3>$${i.price}</h3>
            <p>⭐${i.rating}</p>
        </div>
        `
    }
})

// console.log(products)

// async function getProducts() {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     const products = data.products;

//     const container = document.querySelector(".products");

//     products.forEach(product => {
//         container.innerHTML += `
//             <div class="product">
//                 <h2>${product.title}</h2>
//                 <img src="${product.thumbnail}">
//                 <h3>$${product.price}</h3>
//                 <p>⭐ ${product.rating}</p>
//             </div>
//         `;
//     });
// }

// getProducts();

// async function getProducts() {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     const container = document.querySelector(".products");

//     let html = "";

//     data.products.forEach(product => {
//         html += `
//             <div class="product">
//                 <img src="${product.thumbnail}" alt="${product.title}">
//                 <h2>${product.title}</h2>
//                 <p>$${product.price}</p>
//             </div>
//         `;
//     });

//     container.innerHTML = html;
// }

// getProducts();