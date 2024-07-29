var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    
}

// i will try for onclick background and font-color will change 
// var logo = document.querySelector(".logo");
// var body = document.querySelector(".flex-div");

// logo.onclick = function() {
//     body.classList.toggle("nav-toggle");
// }
