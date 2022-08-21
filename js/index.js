
function deslogearse(){


    if (sessionStorage.getItem("email") !=""){

        sessionStorage.setItem("email", ""); //solo está guardado el email en sessiostorage
        alert("Sesión Cerrada");
        location.href = "login.html";
        
    }
    
}


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

    document.getElementById("cerrar").addEventListener("click", function() {
        deslogearse();
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