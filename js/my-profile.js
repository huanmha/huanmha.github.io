
function validacion(){

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("nombre");
    let email = document.getElementById("email");  
    let celular = document.getElementById("celular");
    
    let regexEmail  =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let regexNombre = /^[A-Za-z][A-Za-z0-9_]{2,29}$/;
    let respuesta = true;
    let regexCelular = /^[09][0-9]{1,9}$/;
    if (regexEmail.test(email.value)){

        email.setCustomValidity("")
    }
    else {

        email.setCustomValidity(false)
        respuesta = false
    }

    if(regexNombre.test(nombre.value)){

        nombre.setCustomValidity("")
    }
    else{ 

        nombre.setCustomValidity(false)
        respuesta=false
    }

    if(regexNombre.test(apellido.value)){

        apellido.setCustomValidity("")
    }
    else{

        apellido.setCustomValidity(false)
        respuesta=false
    }

    if(!regexCelular.test(celular.value) || celular.value==null){

        respuesta=false;
        document.getElementById("celular").classList.add("invalid-color");        
        document.getElementById("spanCelular").style.display = "inline";
    }
    else{

        document.getElementById("celular").classList.remove("invalid-color");
        document.getElementById("spanCelular").style.display="none";

    }

return respuesta
};





document.getElementById('formulario').addEventListener('submit', evento=>{
   
    if( !validacion() || !this.checkValidity() ){ //this se refiere a elemento que se está evaluando, o sea miFromulrio
        evento.preventDefault();                    //si mivalidación es verdadera, la condición !mivalidación va a ser falsa, por tanto preventDefault y stopPropagation no se ejecutan. Sige su curso natural hacía document.body.classList.add('was-validated');
        evento.stopPropagation();
    }
    
    document.body.classList.add('was-validated');//Como siempre se va a ejecutar y válidar pero solo por el html. O sea los mensajes invalidos realizados por JS, solo se va a colocar gracias setCustomValidity

    let eventos=['change', 'input'];
    
    eventos.forEach( evento=> {document.body.addEventListener(evento, validacion)})
     

})
