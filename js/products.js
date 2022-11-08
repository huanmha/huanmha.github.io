const ORDER_ASC_BY_COST = "AZ";
const ORDER_DESC_BY_COST = "ZA";
const ORDER_BY_PROD_COUNT = "Cost.";
let currentProductsArray = [];//array donde se cargarán los datos recibidos:
let filterProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.cost);
            let bCount = parseInt(b.cost);

            if ( aCount > bCount ){ return 1; }
            if ( aCount < bCount ){ return -1; }//ordena de forma creciente
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.cost);
            let bCount = parseInt(b.cost);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }//ordena de forma decreciente
            return 0;
        });
    }

    return result;
}





//array donde se cargarán los datos recibidos:


//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showProductsList(array){
    let htmlContentToAppend = "";

    for(let product of array){

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){

        htmlContentToAppend += `
        <div onclick="productId(${product.id})" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div>
                        <h4 id="nombre">`+ product.name +`</h4> 
                        <p id="descripcion"> `+ product.description +`</p> 
                        </div>
                        <div>
                        <small>` + product.soldCount + ` vendidos</small><br><br>
                        <small> Valor: ` + product.cost +` `+ product.currency+ ` </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        }
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
         
    }
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray );

    //Muestro las categorías ordenadas
    showProductsList(currentProductsArray );
}



function buscador(){

    let palabraBuscada = document.getElementById("buscador").value;


    let filterProductsArray = currentProductsArray.filter(nombre => {
        return nombre.name.toLowerCase().indexOf(palabraBuscada.toLowerCase()) > -1; 
        //nombre recibe todo el objeto, y evalua un abjeto a la vez en el cambo name; todo comparado por minusculas.
        //Entonces para el name se busca la palabra buscada, y si devuelve alguna posición, de 0 a n, quiere decir quese encuentra en eese name y te lo manda, en el caso de que no te manda -1 y no pasa el filtro
    })

    return showProductsList(filterProductsArray);

};




let catID = sessionStorage.getItem("catID");
let url_sessionstorage = PRODUCTS_URL+"/"+catID+".json"; 

function tituloCategoria(catID){

    if (catID=="101"){
        document.getElementById("tituloCategoria").innerHTML = " autos"
    }
    else if(catID=="102"){
        document.getElementById("tituloCategoria").innerHTML = " juguetes"
    }
    else if (catID=="103"){
        document.getElementById("tituloCategoria").innerHTML = " muebles"
    }
};

function productId(id){
 
    sessionStorage.setItem("id",id);
    location.href = "product-info.html";

};


/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/ 

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url_sessionstorage).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            currentProductsArray  = resultObj.data.products
            showProductsList(currentProductsArray )
            //sortAndShowCategories(ORDER_ASC_BY_COST, currentProductsArray);//default
        }
    });

    document.getElementById("buscador").addEventListener("keyup", function(){

        buscador();
    })

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST,currentProductsArray );
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST, currentProductsArray );
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT, currentProductsArray );
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList(currentProductsArray );
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductsList(currentProductsArray);
    });


    tituloCategoria(catID);
});