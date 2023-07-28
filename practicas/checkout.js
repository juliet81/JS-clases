//PARA INSERTAR LA TABLA EN EL HTML

const tableBody = document.querySelector('tbody')

function listarProductosEnCarritoHTML(prenda) {
    return `<tr> 
                <td>${prenda.imagen}</td>
                <td>${prenda.nombre}</td>
                <td>${prenda.importe}</td>
                <td>🗑</td>
            </tr>`
}
/*
//<tr> es table road perfmite crear una fila horizontal
function armarCarrito() {
    tableBody.innerHTML = ''
    if (carritoPrendas.length > 0) {
        carritoPrendas.forEach((prenda)=> {
            tableBody.innerHTML += listarProductosEnCarritoHTML(prenda)
        })
    }
}
armarCarrito()*/
function mostrarMsgCarritoVacio(){
    return` <div class="card-error">
                <h3>El carrito está vacío</h3>
                <h4>🛒</h4>
            </div>`
                }

function armarCarrito() {
    tableBody.innerHTML = ''
    if (carritoPrendas.length > 0) {
        carritoPrendas.forEach((prenda)=> tableBody.innerHTML += listarProductosEnCarritoHTML(prenda))
        }else{
            tableBody.innerHTML = mostrarMsgCarritoVacio()
        }
    }

armarCarrito()