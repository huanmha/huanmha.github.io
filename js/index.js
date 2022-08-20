document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });


    let email = sessionStorage.getItem("email");

    if (email == null){

        alert("Debes logearte para ingresar a e-commerce");
        location.href = "login.html";

    }
    else {
        alert("Estás logeado con "+email);
    }

});