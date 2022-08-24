
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

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    //var id_token = googleUser.getAuthResponse().id_token;
    //console.log("ID Token: " + id_token);

    document.getElementById("email").innerHTML = profile.getEmail();
    document.getElementById("password").innerHTML = profile.getId();

  }


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("login").addEventListener("click", function() {

        logearse();


    });

    document.getElementById("mostrar").addEventListener("click", function() {

        mostrar();

    })

    document.getElementById("login_chronome").addEventListener("click", function() {

        onSignIn(googleUser);


    });

        
    }
);