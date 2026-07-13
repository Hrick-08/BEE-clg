// let searchBar = document.getElementById("search")
// let searchBtn = document.getElementById("searchbtn")
// let container = document.getElementById("container")
// let btn = document.getElementById("searchbtn")

// let url = "https://dummyjson.com/recipes";

// let fetchData = async()=>{
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log(data);
//     let arr = data.recipes
//     arr.forEach((recipe, index)=>{
//         container.innerHTML += `
//         <div id ="d-${index}" class="recipe">
//             <img src="${recipe.image}" alt="${recipe.title}">
//             <p>${recipe.name}</p>
//             <button id="${index}" class="button" onclick="handleDelete(event)">
//                 🗑️
//             </button>
//         </div>
//         `
//         });
//     }
//     // <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
//     // <p>Instructions: ${recipe.instructions}</p>

// fetchData()

// function handleDelete(event){
//     let id = event.target.id;
//     let recipeDiv = document.getElementById(`d-${id}`);
//     recipeDiv.remove();
// }

// function handleSearch(){
//     let searchValue = searchBar.value.toLowerCase();
//     let recipeDivs = document.querySelectorAll(".recipe");
//     for(let i=0; i<recipeDivs.length; i++){
//         let recipe = recipeDivs[i];
//         let recipeName = recipe.getElementsByTagName("p")[0].textContent.toLowerCase();
//         if(recipeName.includes(searchValue)){
//             recipe.style.display = "block";
//         } else {
//             recipe.style.display = "none";
//         }
//     }
// }

// // searchBar.addEventListener("input", handleSearch);
// // searchBtn.addEventListener("click", handleSearch);


let cardContainer=document.getElementById("container") // selected main div of cards here
// let url='https://dummyjson.com/recipes'
let fetchData=async(dish="")=>{
    let response=await fetch(`https://dummyjson.com/recipes/search?q=${dish}`)
    let data= await response.json()
    console.log(data.recipes)
    let arr=data.recipes
    // console.log(arr)
    cardContainer.innerHTML=""
    arr.forEach((el,index)=>{
        cardContainer.innerHTML+=`
        <div id ="d-${index}" class="recipe">
        <img src="${el.image}">
        <h3>${el.name}</h3>
        <p> Time: ${el.prepTimeMinutes}</p>
        <button onclick="handleDelete(${index})">🗑️</button>
        </div>
        `
    })
}

fetchData()

function handleDelete(id){
    let div = document.getElementById(`d-${id}`)
    div.remove()
}

function handleSubmit(){
    let inp=document.getElementById("search").value
    fetchData(inp)
}