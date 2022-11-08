let currentInfoProductsArray=[];
let comentariesArray=[];
let htmlContentToAppend = "";


function showProductsInfo(array){

        htmlContentToAppend += `           
        <div class="container ">
        <div class="text-center p-4">
            <h3 class="fw-bold">${array.category}</h3>
        </div>
        <hr>
        <div class="row">
        <div class="col-4 w-25">      
            <div>
                <h5 class="fw-bold">Nombre</h5>
                <p class="h-100 d-inline-block">${array.name}</p>
                <h5 class="fw-bold">Precio</h5>
                <p class="h-50 d-inline-block">${array.cost} ${array.currency}</p>
                <h5 class="fw-bold">Descripción</h5>
                <p class="h-50 d-inline-block">${array.description}</p>
                <h5 class="fw-bold">Categoría</h5>
                <p class="h-50 d-inline-block">${array.category}</p>
                <h5 class="fw-bold">Cantidad Vendidos</h5>
                <p class="h-50 d-inline-block">${array.soldCount}</p><br>
                <button type="button" id="comprar" class="btn btn-outline-success btn-lg" onclick="agregarCarrito()">Agregar al Carrito</button>
            </div>
        </div>
        <div class="col-8">

                <div id="carouselExampleIndicators" class="carousel slide w-100" data-ride="carousel" style="margin-left: 150px;">
                    <div class="carousel-inner rounded ">
                    ${recorriendoImagenes (array)}
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                    </a>
                </div>

        </div>
        </div>
        </div>
        <br>
        <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
          ${imagenesProductosRelacionados(array)}
          </div>
        </div>
        </div>
        <!--<div class="container">
        <div class="row h-25">
            <div id="carouselRelatedProducts" class="carousel slide w-50" data-ride="carousel" style="margin-left: 300px;">
                <div class="carousel-inner rounded ">
                ${productoRelacionadosCarrousel(array)}
                </div>
                <a class="carousel-control-prev" href="#carouselRelatedProducts" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselRelatedProducts" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                </a>
            </div>
        
        </div>-->
        </div>
        <br>
        `

        document.getElementById("infoImagen").innerHTML = htmlContentToAppend;
        
    };

let htmlImagenes = "";

let htmlRelatedProducts = "";
function imagenesProductosRelacionados(array){

    for(producto of array.relatedProducts){

        htmlRelatedProducts += `
        <div class="card-deck col-md-4">
        <div class="card" >
          <img class="h-20 d-inline-block" src="${producto.image}" onclick="idProductoRelacionado(${producto.id})" >
          <div class="card-body">
            <h5 class="card-title">${producto.name}</h5>
          </div>
        </div>
        </div>
        `
    }
    return htmlRelatedProducts;

};

function recorriendoImagenes (array){

    for(imagen of array.images){

        if (array.images[0] == imagen){

            htmlImagenes += `
            <div class="carousel-item active">
                <img class="d-block " src="${imagen}">
            </div>
            `
        }
        else{
        htmlImagenes += `
        <div class="carousel-item">
            <img class="d-block " src="${imagen}">
        </div>
        `
    }
    }

    return htmlImagenes;
};


function productoRelacionadosCarrousel(array){

    contador = 1;
    for(producto of array.relatedProducts){

        if (contador == 1){

            htmlRelatedProducts += `

            <div class="carousel-item active">
                <img class="d-block w-100" src="${producto.image}" id="${producto.id}">
                <div class="carousel-caption d-none d-md-block" style="margin: 0px;">
                    <h5 class="productName">${producto.name}</h5>
                </div>
            </div>
            `
        }
        else{
        htmlRelatedProducts += `
        <div class="carousel-item">
            <img class="d-block w-100" src="${producto.image}" id="${producto.id}">
            <div class="carousel-caption d-none d-md-block" style="margin: 0px;">
                <h5 class="productName">${producto.name}</h5>
            </div>
        </div>
        `
    }
     contador += 1;
    }
    return htmlRelatedProducts;

};


function puntaje(score){

    var estrellas="Calificación: ";
    
    for(let contador=1; contador<=5;contador ++){

        if(contador <= score){

            estrellas += `<i class="fas fa-star checked"></i> `;
        }
        else{
            estrellas += `<i class="fas fa-star"></i> `;

        } 
    };
    return estrellas;
    };

function showComentariesArray(array){

    for(let person of array){
    

    htmlContentToAppend += `
    <div class="container">
        <div class="list-group-item w-80">
            <div class="d-flex justify-content-between">
            <h5 class="font-weight-bold">${person.user}</h5>

            <small class="text-muted">${puntaje(person.score)}</small>
            </div>
            <p class="mb-1">${person.description}</p>
        </div>
    </div>
    `

    
    }
    document.getElementById("infoImagen").innerHTML = htmlContentToAppend;


};




function fechaYhora (){

    let hoy =  new Date();
    let year = hoy.getFullYear();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;//pq comieza désde e 0 xd
    
    if (mes <10){

        mes = `0${mes}`
    }
    
    let hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`

    let fechaHora=`${year}/${mes}/${dia}  ${hora}`;

    return fechaHora;
};



let comentarios = [];


function comentar(){

    
    let description = document.getElementById("textoComentarios").value; 
    let score = document.getElementById('valor').innerHTML;
    let user = sessionStorage.getItem("email");
    let dateTime = fechaYhora();
    comentarios.description = description;
    comentarios.score = score;
    comentarios.user = user;
    comentarios.dateTime = dateTime;
    document.getElementById("textoComentarios").value = "";
    let array = [comentarios];
    
    showComentariesArray(array);



};


function idProductoRelacionado(valorId){

    sessionStorage.removeItem("id");
    sessionStorage.setItem("id", valorId);
    location.href="product-info.html";
    
}

function agregarCarrito(){
    
    array = JSON.parse(sessionStorage.getItem("arrayProducto"));//Acá bajo el array del producto que quiero agragar al carrito

    let id = array.id;
    let name = array.name; 
    let unitCost = array.cost;
    let count = 1;
    let currency = array.currency;
    let image = array.images[0];
    let subtotal= array.cost;//por defecto es el costo de la unidad, importante cuando uno agrga por primer vez ese articulo

    let articulo = {id,name,unitCost,count,currency,image,subtotal};
    console.log(articulo);

    carritoArreglo = JSON.parse(sessionStorage.getItem("arrayCarrito"));

    let  estaOno = carritoArreglo.articles.find(({id}) => id === array.id);//se podría poner id en vez de array.id, pq el método entien de que es diferente. 

    if(estaOno!=undefined){
        for(objeto of carritoArreglo.articles){
    if(objeto.id == array.id){
        objeto.count+=1
        objeto.subtotal = objeto.count*objeto.unitCost;//Es la forma que encontré de que en el cart.html, yá aparezca cargado el subtotal
    } //Sumo uno al articulo que yá está agregado
    }
    }
    else{

        carritoArreglo.articles.push(articulo);//pusheo articulo que no se encuentra
    }

    sessionStorage.setItem("arrayCarrito",JSON.stringify(carritoArreglo));

    location.href = "cart.html";

/*     arrayArticles.id = id;
    arrayArticles.name = name;
    arrayArticles.unitCost = unitCost;
    arrayArticles.count = count;
    arrayArticles.image = image; */

    //articles.push(arrayArticles);
    //sessionStorage.setItem("arryAgregarCarrito", JSON.stringify(articulo));
    
};

let productId = sessionStorage.getItem("id");
let url_product_info = PRODUCT_INFO_URL + productId + ".json";
let url_product_commets = PRODUCT_INFO_COMMENTS_URL + productId+".json";
console.log(url_product_info);


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url_product_info).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            currentInfoProductsArray  = resultObj.data
            showProductsInfo(currentInfoProductsArray);

            sessionStorage.setItem("arrayProducto",JSON.stringify(currentInfoProductsArray));
            
        }   
    });
    getJSONData(url_product_commets).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comentariesArray  = resultObj.data
            showComentariesArray(comentariesArray);
        }   
    });


    document.getElementById("comentar").addEventListener("click", function(){

        comentar();
        
    })


});