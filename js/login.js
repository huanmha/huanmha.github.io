
function logearse(){
    let usuario = {};

    usuario.email= document.getElementById("email").value;
    usuario.password = document.getElementById("password").value;

    if( usuario.email=="" || usuario.password==""){

        alert("Error Re-Ingrese ambos datos");
    }
    else {
        
        
        sessionStorage.setItem("email",usuario.email);

        window.location.href = "index.html";
        alert("Datos Ingresados Correctamente!");

}


}

function mostrar(){

    let tipo = document.getElementById("password");

    if (tipo.type == "password"){

        tipo.type = "text";
    }
    
    else {
        tipo.type == "password";
    }

}



document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("login").addEventListener("click", function() {

        logearse();


    });

    document.getElementById("mostrar").addEventListener("click", function() {

        mostrar();

    })
        
    }
);