const imagenLogo = 'images/clothes.png'
const imgLogo = document.getElementById('logo')
imgLogo.src = imagenLogo
const container = document.querySelector('div#container.container')

const inputSearch = document.querySelector('input#inputSearch')

function retornarCardHTML(producto){
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
                    <button class="button button-outline" id=" ${producto.codigo}">add</button>
                </div>
            </div>`
}

function activarClickEnBotones(){
    const botones = document.querySelectorAll('button.button.button-outline')
    botones.forEach((boton)=>{
        boton.addEventListener ('click', ()=>{
            //console.log(boton.id)
            let producto = arrayProductos.find((prenda)=> prenda.codigo === parseInt(boton.id))
            carritoPrendas.push(producto)
            console.table(carritoPrendas)
        })
    })
}

function cargarProductos(array){
    container.innerHTML = ""
    array.forEach((producto)=>{
        container.innerHTML += retornarCardHTML(producto)
    })
    activarClickEnBotones()
}
cargarProductos(arrayProductos)
/*
const btnDeEjemplo = document.querySelector ('button#btnDeEjemplo')
                                    //functionAejecutar en lugar de arrow function
btnDeEjemplo.addEventListener('click', ()=>{
    console.log ('Hice click en un botón HTML.')
    alert ('Haz hecho click en el botón de ejemplo.')
})
*/

/* EVENTOS DEL MOUSE

    click
        mousedown (cuando presionamos el botón del mouse y lo mantenemos pulsado)
        mouseup (cuando soltamos el botón del mouse)
    dblclick (soble click)
    mousemove (detecta cuando movemos el mouse)
        mouseover (detectamos cuando pasamos el mouse sobre determinado elemento HTML, dispara la acción asociada una sola vez)
        mouseout (cuando quitamos el mouse de ese documento HTML, se produce mouseout, también podemos definirle una acción asociada cuando quitamos el mouse de ese elemento HTML)


imgLogo.addEventListener ('mouseover', ()=> {
    imgLogo.tittle = 'Ir al carrito'
})        

                            //keypress, keydown, es otra opción
inputSearch.addEventListener('change', ()=>{ //change detecata cuando cambia algo en el estado del HTML, si cliqueamos en algo x ej
    console.log(inputSearch.value)
})


                                        //se lo puede escribir ev, evt, event
inputSearch.addEventListener('keypress', (e)=>{ 
    if(e.key === 'Enter'){
        const resultado = arrayProductos.filter((prenda)=>prenda.nombre.toLocaleLowerCase().includes(inputSearch.value.toLocaleLowerCase()))
    cargarProductos(resultado)
    }
})
*/
inputSearch.addEventListener('search', ()=>{    
        const resultado = arrayProductos.filter((prenda)=>prenda.nombre.toLocaleLowerCase().includes(inputSearch.value.toLocaleLowerCase()))
    cargarProductos(resultado)
})
