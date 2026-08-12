let users = [
    {
        id:1,
        name:"Leanne Graham",
        username:"Bret",
        email:"Sincere@april.biz"
    },

    {
        id:2,
        name:"Ervin Howell",
        username:"Antonette",
        email:"Shanna@melissa.tv"
    },

    {
        id:3,
        name:"Clementine Bauch",
        username:"Samantha",
        email:"Nathan@yesenia.net"
    },

    {
        id:4,
        name:"Patricia Lebsack",
        username:"Karianne",
        email:"Julianne.OConner@kory.org"
    },

    {
        id:5,
        name:"Chelsey Dietrich",
        username:"Kamren",
        email:"Lucio_Hettinger@annie.ca"
    },

    {
        id:6,
        name:"Mrs. Dennis Schulist",
        username:"Leopoldo_Corkery",
        email:"Karley_Dach@jasper.info"
    },

    {
        id:7,
        name:"Kurtis Weissnat",
        username:"Elwyn.Skiles",
        email:"Telly.Hoeger@billy.biz"
    },

    {
        id:8,
        name:"Nicholas Runolfsdottir V",
        username:"Maxime_Nienow",
        email:"Sherwood@rosamond.me"
    },

    {
        id:9,
        name:"Glenna Reichert",
        username:"Delphine",
        email:"Chaim_McDermott@dana.io"
    },

    {
        id:10,
        name:"Clementina DuBuque",
        username:"Moriah.Stanton",
        email:"Rey.Padberg@karina.biz"
    }
];

let container=document.getElementById("container");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

display();

function display(){

container.innerHTML="";

users.forEach((user)=>{

let col=document.createElement("div");
col.className="col-md-4 mb-4";

col.innerHTML=`
    <div class="card shadow h-100">

    <div class="card-body">

    <h4>${user.name}</h4>

    <p><b>Username:</b> ${user.username}</p>

    <p>${user.email}</p>

    <button class="btn btn-primary w-100">
    Add To Cart
    </button>

    </div>

    </div>
`;

col.querySelector("button").addEventListener("click",()=>{

    let exist=cart.find((el)=>el.id===user.id);

    if(exist){
        alert("Already Added");
        return;
    }

    cart.push(user);

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Added Successfully");

    });

    container.append(col);

    });

}