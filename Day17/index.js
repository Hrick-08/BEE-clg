let handleSubmit = async (event) => {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    let userObject = {
        name: name.value,
        email: email.value,
        age: age.value
    };

    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    });

    alert("user registered successfully");

    event.target.reset();

    getData();
};


let getData = async () => {
    let res = await fetch("http://localhost:3000/users");
    let data = await res.json();

    console.log(data);

    displayData(data);
};


getData();


let displayData = (users) => {
    let container = document.getElementById("container");

    container.innerHTML = "";

    users.forEach((element) => {
        container.innerHTML += `
            <div id="user-${element.id}">
                <h3>${element.name}</h3>
                <p>Email: ${element.email}</p>
                <p>Age: ${element.age}</p>

                <button onclick='handleDelete("${element.id}")'>
                    Delete
                </button>

                <button onclick='handleUpdate("${element.id}")'>
                    Update
                </button>
            </div>
        `;
    });
};


let handleDelete = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
    });
    getData();
};


let handleUpdate = (id) => {
    alert(`update clicked ${id}`);
};