var likebtn = document.getElementById("likebtn");
var dislikebtn = document.querySelector("#dislikebtn");

likebtn.addEventListener("click", handleLike);
dislikebtn.addEventListener("click", handleDislike);

var likeCount = document.getElementById("like-count");
var dislikeCount = document.getElementById("dislike-count");

var likes = 0;
var dislikes = 0;

function handleLike(){
    likes++;
    likeCount.textContent = likes;
    likebtn.style.backgroundColor = "green";
    dislikebtn.style.backgroundColor = "white";
    likeCount.style.color = "green";
}

function handleDislike(){
    dislikes++;
    dislikeCount.textContent = dislikes;
    dislikebtn.style.backgroundColor = "red";
    likebtn.style.backgroundColor = "white";
    dislikeCount.style.color = "red";
}
