

let HTMLCart="";
function showCart(){


    HTMLCart+=`
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Costo</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Moneda</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody >
            ${infoCarrito()}
        </tbody>
    </table>


    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">Subtotal</th>
            <th scope="col">Costo Envio</th>
            <th scope="col">Total</th>
            <th scope="col">Moneda</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="table-secondary" scope="row" id="subtotal"></th>
                <td class="table-secondary" id="costoEnvio"></td>
                <td class="table-warning" id="montoTotal"></td>
                <td class="table-warning">$USD</td> 
            </tr>
        </tbody>
    </table>


    <form class="needs-validation" novalidate>
        <div class="row">

            <div class="col-md-3 ">
                <div class="form-check p-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="0.15" onblur="costoEnvio()" required>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Premiun 2 a 5 días (15%)
                    </label>
                </div>
                <div class="form-check p-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="0.07" onblur="costoEnvio()" required>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Express 5 a 8 días (7%)
                    </label>
                </div>
                <div class="form-check p-2">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"  value ="0.05" onblur="costoEnvio()" required>
                    <label class="form-check-label" for="flexRadioDefault3">
                        Standard 12 a 15 días (5%)
                    </label>
                </div>
            </div>

            <div class="col-md-9">
                <div class="row g-0"><!---La clase g-0 de bootstrap quita los espacios entre las columnas --->           
                    <div class="col-md-2">
                        <span class="input-group-text">Dirección</span>
                    </div>

                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Calle" pattern="[A-Z a-z]{3,}" id="validationCustom01" required>
                        <div class="valid-feedback">
                            Bien!
                        </div>
                        <div class="invalid-feedback">
                            Ingresar calle
                        </div>
                    </div>
                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Esquina" pattern="[A-Z a-z]{3,}" id="validationCustom01"  required>
                        <div class="valid-feedback">
                            Bien!
                        </div>
                        <div class="invalid-feedback">
                            Ingresar esquina
                        </div>
                    </div>
                    <div class="col-md-3" >
                        <input type="text" class="form-control" placeholder="Número de puerta" pattern="[0-9]{4}" id="validationCustom01"  required>
                        <div class="valid-feedback">
                            Bien!
                        </div>
                        <div class="invalid-feedback">
                            Ingresar número de puerta
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 " style="padding:10px">
                    ${modal()}
                    </div>
                </div>

            </div>
        <div class="col" style="padding:10px">                    
            <button class="btn btn-primary w-100 h-100 btn btn-success" style="font-size: 21px;" type="submit" >Confirmar pago</button>
        </div>        
        </div>
    </form>
    
    `

    document.getElementById("carrito").innerHTML = HTMLCart;


};



function verificacionCampos (){

    let inputsNames = document.getElementsByName("modalForm");
    let contador=0


    for (let i=0; i< inputsNames.length; i++){

        if(inputsNames[i].hasAttribute("disabled")){
        
            contador+=1
        }
        else if(!inputsNames[i].checkValidity()){

            document.getElementById("feedbackModal").style.display = "inline";
        }
        else if(inputsNames[i].checkValidity()){

            document.getElementById("feedbackModal").style.display = "none";
        }
    }


    if(contador==2){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Faltan datos de su tarjeta',

          });
    }
    else if (contador==5){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Faltan datos de la transferencia bancaria',

          });
    }



};



function modal(){

    HTMLmodal=`
    
    <!-- Button trigger modal -->

        
            <button id="botonModal" type="button" class="btn btn-primary w-100 h-100" style="marging:10px" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Seleccionar forma de pago
            </button>
            <span class="invalid-feedback" id="feedbackModal">
                  Debes elegir un método de pago.
            </span>
        

      
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog justify-content-md-center">
          <div class="modal-content " style="background-color: #cccccc">
            <div class="modal-header text-white" style="background-color: black;">
              <h4 class="modal-title "id="staticBackdropLabel">Elija el medio de pago</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" >
                <div class="container-fluid">
                  <div class="row justify-content-md-center">
                    <button type="button" class="btn btn-success w-50" id="tarjeta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
                        </svg>
                        Ingrese tarjeta de credito
                    </button>
                  </div>
                  <div class="row">
                        <form role="form">
                            <div class="form-group" > <label for="username">
                                    <h6>Titular tarjeta</h6>
                                </label> <input type="text" name="modalForm" id="form1" placeholder="Titular tarjeta" required class="form-control " > 
                            </div>
                            <div class="form-group"  > <label for="username">
                                    <h6>Número Tarjeta</h6>
                                </label> <input type="text" name="modalForm" id="form2" placeholder="Número tarjeta" required class="form-control "> 
                            </div>
                            <div class="row" >
                                <div class="col-sm-8">
                                    <div class="form-group"> <label><span class="hidden-xs">
                                                <h6>Vencimiento</h6>
                                            </span></label>
                                        <div class="input-group"> 
                                        <input type="number" placeholder="MM" name="modalForm" id="form3" min="1" max="12" pattern="[0-9]{2}" class="form-control" required> 
                                        <input type="number" placeholder="AA" name="modalForm" id="form4" min="22" max="30" pattern="[0-9]{2}" class="form-control" required> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group mb-4"> <label data-toggle="tooltip" >
                                            <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                        </label> <input type="text" name="modalForm" id="form5" required class="form-control"> </div>
                                </div>
                            </div>
                            <div class="row justify-content-md-center">
                                <button type="button" class="btn btn-warning w-50" id="transferencia">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
                                    </svg>
                                    Transferencia Bancaria
                                </button>
                                <h6>Banco/número de cuenta</h6>
                                <div class="input-group">
                                    <div class="input-group-prepend w-25">
                                    <select class="form-control" name="modalForm" id="form6" required disabled>
                                        <option value="" selected disabled>--Banco--</option>
                                        <option>BROU</option>
                                        <option>Itau</option>
                                        <option>Santander</option>
                                    </select> 
                                    </div>
                                    <input type="text" class="form-control" placeholder="N° de tarjeta" name="modalForm" id="form7" required disabled>                        
                                </div>
                    </form> 
                </div>            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Listo</button>
            </div>
          </div>
        </div>
      </div>
    
    `
return HTMLmodal;
};

let eliminar = document.getElementsByName("borrar");

function eliminarItem(posicion){
    
        arrayCarrito  = JSON.parse(sessionStorage.getItem("arrayCarrito"));
        arrayCarrito.articles.splice(posicion,1);
        sessionStorage.setItem("arrayCarrito",JSON.stringify(arrayCarrito));
        window.location.href = window.location.href;//Importante porque recarga la página, y permite que showCart() opere pero ahora con el arrayCarrito actualizado
        

}

let HTMLinfo="";
function infoCarrito(){

    
    let posicion=0;
    arrayCarrito  = JSON.parse(sessionStorage.getItem("arrayCarrito"));
    for (articulo of arrayCarrito.articles){

    HTMLinfo +=`
    <tr>
        <th scope="row"><img  id="image" src="${articulo.image}" class="rounded w-25 h-25"></th>
        <td id="name">${articulo.name}</td>
        <td id="unitCost${articulo.id}">${articulo.unitCost}</td>
        <td><input type="number" value="${articulo.count}" class="w-50" id="count${articulo.id}" min="1" onchange="calculoSubtotal(${articulo.id})"></td>
        <td id="subtotal${articulo.id}">${articulo.subtotal}</td> 
        <td>${articulo.currency}</td>
        <td name="borrar" onclick ="eliminarItem(${posicion})"><img src="img/trash_icon.svg"></td>                                                                                                                                        
    </tr>
`
posicion+=1;
};


return HTMLinfo;

};

function calculoSubtotal(id){//Cambiar todo para que baje los valores del sessionstorage.

    let countID = "count"+id;
    let unitCostID = "unitCost"+id;
    let subtotalID = "subtotal"+id;

    let count = parseInt(document.getElementById(countID).value);
    let unitCost = parseInt(document.getElementById(unitCostID).innerHTML); 
    let subtotal = count*unitCost;   

    carritoArreglo = JSON.parse(sessionStorage.getItem("arrayCarrito"));
    for(objeto of carritoArreglo.articles){
        
    if(objeto.id == id){
        objeto.count = count;
        objeto.subtotal = subtotal;
        sessionStorage.setItem("arrayCarrito",JSON.stringify(carritoArreglo));
    }
    };


    document.getElementById(subtotalID).innerHTML = subtotal;

    document.getElementById("subtotal").innerHTML = Math.round(sumaTotal());//redundancia para que se coordine con el onclick
    document.getElementById("costoEnvio").innerHTML = Math.round(costoEnvio());
    document.getElementById("montoTotal").innerHTML = Math.round(sumaTotal()+costoEnvio());
     

};

function sumaTotal(){

    let suma = 0;
    carritoArreglo = JSON.parse(sessionStorage.getItem("arrayCarrito"));
    for(objeto of carritoArreglo.articles){

        if(objeto.currency=="UYU"){

            suma+= objeto.subtotal/40
        }
        else{
        suma += objeto.subtotal;
        }
    }

    document.getElementById("subtotal").innerHTML =Math.round(suma);//redundancia para que funcione el onblur
    document.getElementById("montoTotal").innerHTML =Math.round(suma+parseInt(document.getElementById("costoEnvio").innerHTML)); 
    return Math.round(suma);
};

function costoEnvio(){

    let checkedValue = null; 
    let inputElements = document.getElementsByClassName('form-check-input');
    for(let i=0; inputElements[i]; ++i){//
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
}

    document.getElementById("costoEnvio").innerHTML = Math.round(checkedValue*sumaTotal()); //redundancia para que funcione el onblur
    document.getElementById("montoTotal").innerHTML = Math.round(checkedValue*sumaTotal()+parseInt(document.getElementById("subtotal").innerHTML));
    return Math.round(checkedValue*sumaTotal());


};





function habilitarTransferencia(){

    for(let i = 1; i<=7; i++){
        if(i>5){

            let form = `form${i}`
            document.getElementById(form).removeAttribute("disabled"); //form 6 y 7 son los de la trasferencia bancaria
        }
        else {

        let form = `form${i}`
        document.getElementById(form).setAttribute("disabled","");
        }

    };

};

function habilitarTarjeta(){

    for(let i = 1; i<=7; i++){
        if(i>5){

            let form = `form${i}`           
            document.getElementById(form).setAttribute("disabled",""); 
        }
        else {

        let form = `form${i}`
        document.getElementById(form).removeAttribute("disabled");
        }

    };
};


document.addEventListener("DOMContentLoaded", function(e){


    cartArray  = JSON.parse(sessionStorage.getItem("arrayCarrito"));
    showCart();

    document.getElementById("transferencia").addEventListener("click",function(){
        habilitarTransferencia();
    })
    document.getElementById("tarjeta").addEventListener("click", function(){
        habilitarTarjeta();

    })

    document.getElementById("subtotal").innerHTML = sumaTotal();//redundancia para que se coordine con el onclick
    document.getElementById("costoEnvio").innerHTML = costoEnvio();
    document.getElementById("montoTotal").innerHTML = Math.round(sumaTotal()+costoEnvio());

  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    console.log(forms);
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {


      form.addEventListener('submit', event => {

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          verificacionCampos()
        }
        
       form.classList.add('was-validated')
        

      }, false)
    })

});
