
function deslogearse(){


    if (sessionStorage.getItem("email") !=""){

        sessionStorage.clear; //solo está guardado el email en sessiostorage
        alert("Sesión Cerrada");
        location.href = "login.html";
        
    }
    
}


function revisarEmail(){
    let email = sessionStorage.getItem("email");

    if (email == null){

        alert("Debes logearte para ingresar a e-commerce");
        location.href = "login.html";

    }
    else {
        alert("Estás logeado con "+email);
    }

} 

/* function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  } */


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        sessionStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        sessionStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        sessionStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    document.getElementById("cerrar").addEventListener("click", function() {
        deslogearse();
    });
    
    revisarEmail();

    document.getElementById("mostrar_email").innerHTML = sessionStorage.getItem("email");

/*     document.getElementById("cerrarGoogle").addEventListener("click", function() {

        signOut();
    }); */

});