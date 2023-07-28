//imgLogo.id, img.tittle, imgLogo.src o img.className, no se puede utilizar el atibuto class solo xq es una palabra reservada

const imagenLogo = 'images/clothes.png'
const imgLogo = document.getElementById('logo')
const titulo = document.getElementById('titulo')
const slogan = document.getElementById('slogan')
//const parrafos = document.getElementsByTagName('p') están en desuso
//const parrafosAzules = getElementsByClassName(texto-azul) están en desuso
//en su reemplazo vino:
const container = document.querySelector('div#container.container') //xej (h1) 
//const botones = document.querySelectorAll('button') //crea una colección, se pueden concatenar dif clases de css, ej button.button.button-outline.button-add

imgLogo.src = imagenLogo
titulo.innerText = 'Ecommerce de prendas'
//titulo.innerHTML = 'Ecommerce de prendas'
slogan.textContent = 'Un slogan que "Rompa internet!"' //es más descriptivo que innerText e innerHTML, nos conecta con un solo elemento

/*
.getElementById()  nos conecta con un elemento HTML que posea un ID determinado
.getElementByTagName() genera una colección de elementos HTML de un mismo tag, ej <p>
.getElementByClassName() genera una colección de elementos con una misma clase CSS
*/

function retornarCardHTML(producto){
    /*
    - template strings = plantilla de texto enfocada en bloques HTML
    - template literals = plantilla para referenciar valores de variables, constantes o propiedades
    */
   return `<div class="div-card">
                <div class="imagen">
                    <h1> ${producto.imagen}</h1>
                </div>
                <div class="prenda">
                    <p> ${producto.nombre}</p>
                </div>
                <div class="importe">
                    <p>$ ${producto.importe}</p>
                </div>
                <div class="comprar">
                    <button id=" ${producto.codigo}">add</button>
                </div>
            </div>`
}

function cargarProductos(){
    arrayProductos.forEach((producto)=>{
        container.innerHTML += retornarCardHTML(producto)
    })
}
cargarProductos()



const titulo3 = document.createElement('h3')
      titulo3.id = 'titulo3'                                       //HTML Element
      titulo3.className = 'texto-azul'
      titulo3.textContent = 'Título de nivel 3'
      container.appendChild(titulo3)