
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

  }




  let user_id ="25801";//Pensar como sería válido para varios ids
  url_cart_info= CART_INFO_URL+ user_id+".json";//url completa del JSON del carrito
  console.log(url_cart_info);

document.addEventListener("DOMContentLoaded", function(){


    getJSONData(url_cart_info).then(function(resultObj){//Importante estoy haciendo la carga del 1er elemento del carrito una sola vez, pq está en el login
        if (resultObj.status === "ok")
        {
            cartArray  = resultObj.data

            let valor = cartArray.articles[0].unitCost;
            cartArray.articles[0].subtotal=valor;//pusheando subtotal para tener actualizados los valores en cart.html

            sessionStorage.setItem("arrayCarrito",JSON.stringify(cartArray));
            
        }   
    });


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