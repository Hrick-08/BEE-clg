var btn = document.getElementById("submit")
btn.addEventListener("click",handleClick)

function handleClick(){
    var imageinput =  document.getElementById("url").value 
    var titleInput = document.getElementById("title").value
    var ratingInput = document.getElementById("rating").value
    console.log(imageinput)
    var carDiv = document.getElementById("carDiv")
    carDiv.innerHTML += `
    <div class="card">
        <img src="${imageinput}" alt="">
        <p>Movie : ${titleInput} </p>
        <h3>Rating: ${ratingInput}</h3>
    </div>`
}