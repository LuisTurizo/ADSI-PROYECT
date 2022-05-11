let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let buscar = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

buscar.onclick = function(){
    sidebar.classList.toggle("active");
}
let products = document.querySelector(".products");
let product = document.querySelector(".pro")
let principal = document.querySelector(".principal")
let productos = document.querySelector('.bx-grid-alt');

productos.onclick = function(){
    products.classList.toggle("active");
    principal.classList.toggle("active")

}

product.onclick = function(){
    products.classList.toggle("active")
    principal.classList.toggle("active")
}