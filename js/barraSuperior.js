
function revisarEmail(){
    let email = sessionStorage.getItem("email");
    let urlCompleta = location.href 
    let url = urlCompleta.substring(urlCompleta.search("i"));

    if (email == null){

        alert("Debes logearte para ingresar a e-commerce");
        location.href = "login.html";

    }
    else if (url == "index.html") {//Así compruebo que solo aprazca el alert cuando se ingresa a login
        alert("Estás logeado con "+email);
    }

} 

function deslogearse(){


    if (sessionStorage.getItem("email") !=""){

        sessionStorage.removeItem("email"); //solo está guardado el email en sessiostorage
        alert("Sesión Cerrada");
        location.href = "login.html";
        
    }
    
}

function colocarBarrra(){

    contenido = `
<div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav w-100 justify-content-between">
        <li class="nav-item">
          <a class="nav-link active" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="categories.html">Categorías</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sell.html">Vender</a>
        </li>
        <li class="nav-item dropdown">
          <a id="mostrar_email" class="nav-link btn btn-primary dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: white;"></a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="cart.html">Carrito</a>
            <a class="dropdown-item" href="my-profile.html">Perfil</a>
            <a class="dropdown-item" href ="#" id="cerrarSesion">Cerrar Sesion</a>
          </div>
        </li>
      </ul>
    </div>
</div>`

  document.getElementById("barraSuperior").innerHTML = contenido;

}


document.addEventListener("DOMContentLoaded", function(){

    colocarBarrra();
    
    revisarEmail();

    document.getElementById("mostrar_email").innerHTML = sessionStorage.getItem("email");

    document.getElementById("cerrarSesion").addEventListener("click",function(){

        deslogearse();
    })
})
