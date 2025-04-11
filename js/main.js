const main = document.getElementsByTagName("main>div").item(0);
const contenedorProductos = document.getElementById("contenedor-productos");

const URLMain = "https://fakestoreapi.com/products/";
let res;

function getData() {
    fetch(URLMain)
        .then((respose) => {
            respose.json().then((res) => {
                console.log(res.length);
                createCards(res);
            });
            console.log(respose);
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div> class = "alert alert-danger" role = "alert">
            ${err.message}
            </div>`
            );
        });
}

function createCards(prods) {
    prods.forEach((res) => {
        contenedorProductos.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${res.image}" alt="${res.title}">
                <div class="card-body">
                    <h5 class="card-title">${res.title}</h5>
                    <p class="card-text">${res.description.slice(0, 100)}...</a>
                </div>
            </div>`
        );
    });
}

getData();
