let cart=JSON.parse(localStorage.getItem("cart"))||[];

let container=document.getElementById("cartContainer");

display();

function display(){

container.innerHTML="";

if(cart.length===0){

    container.innerHTML=`

        <div class="text-center">

        <h2>No Users Added</h2>

        </div>

    `;

    return;

}

cart.forEach((user,index)=>{

    let col=document.createElement("div");

    col.className="col-md-4 mb-4";

    col.innerHTML=`

        <div class="card shadow">

        <div class="card-body">

        <h4>${user.name}</h4>

        <p><b>Username:</b> ${user.username}</p>

        <p>${user.email}</p>

        <button class="btn btn-danger w-100">
        Delete
        </button>

        </div>

        </div>

    `;

    col.querySelector("button").addEventListener("click",()=>{

        cart.splice(index,1);

        localStorage.setItem("cart",JSON.stringify(cart));

        display();

        });

        container.append(col);

    });

}