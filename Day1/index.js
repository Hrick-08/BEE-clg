var btn = document.getElementById("submit")
btn.addEventListener("click", handleClick)

function handleClick() {
    alert("button is triggered");
    var imageInput = document.getElementById("url").value;
    var titleInput = document.getElementById("title").value;
    var ratingInput = document.getElementById("rating").value;
    console.log(imageInput);
}