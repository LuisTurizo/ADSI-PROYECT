let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let buscar = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

buscar.onclick = function(){
    sidebar.classList.toggle("active");
}

