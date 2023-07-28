/*let indice = carrito.findIndex((producto)=> producto.id === 6789)
//lo que hace findIndex, empieza a iterar el array de ppio a fin, va pasando cada objeto o elemento del array como parámetro de la función "producto"
// para que podamos evaluar, en este caso es un objeto, si alguna propiedad del mismo coincide con un valor determinado
//cuando lo ejecutamos, si encuentra coincidencia findIndex, deja almacenada esa coincidencia en la variable que definimos (indice)
//lo que hace finIndex, nos retorna cuál es el índice del elemento/objeto en este caso el array carrito

// .splice (indice, y número del objeto a eliminar) sirve para eliminar un producto del carrito


//MAP - nos crea un nuevo array transformados según las operaciones de la función enviada por parámetro
//Tiene la misma cantidad de elementos pero los almacenados son el return de la función
const productos = [
    {id: 2345, imagen:'💻', nombre: 'MACBOOK AIR 13', importe: 749900, categoria: 'Portátiles'},
    {id: 3456, imagen:'💻', nombre: 'LENOVO IDEAPAD 13', importe: 199949, categoria: 'Portátiles'},
    {id: 4567, imagen:'🖥️', nombre: 'LENOVO GAMER 15', importe: 609090, categoria: 'Desktop'},
    {id: 5678, imagen:'🖥️', nombre: 'ASUS GAMING PRO 17', importe: 679800, categoria: 'Desktop'},
    {id: 6789, imagen:'📱', nombre: 'IPAD PRO 12', importe: 219890, categoria: 'Tablets'},
    {id: 7890, imagen:'📱', nombre: 'PAD DROID 10.1', importe: 119960, categoria: 'Tablets'},
    {id: 8901, imagen:'📱', nombre: 'IPAD MINI 7.9', importe: 229900, categoria: 'Tablets'},
    {id: 9012, imagen:'⌚️', nombre: 'SMARTWATCH 1.8', importe: 29900, categoria: 'Relojes'}]


function mapearProductos() {
    //permite realizar tranformaciones a partir del array original
    //array de elementos con nombres de productos
   //  let arraySimplificado = productos.map((producto)=> producto.nombre)

   //creamos un array de objetos con nombre e importe
   let arraySimplificado = productos.map((producto)=> {
        return {
                nombre: producto.nombre, //podría lugar de nombre: podría ser descripción
                importe: producto.importe ////podría lugar de importe: podría ser precio
               }
   })
    console.table(arraySimplificado)


let arrayProyeccion = productos.map((producto)=> {
    return{
        nombre: producto.nombre,
        importeActual: producto.importe,
        importe10on: (producto.importe * 1.1).toFixed(2), //incremendo de 10%, ej pago con tarjeta
        importeCash: (producto.importe * 0.9).toFixed(2), //descuento 10%
        importeMes1: (producto.importe * 1.06).toFixed(2),
        importeMes2: (producto.importe * 1.12).toFixed(2),
        importeMes3: (producto.importe * 1.18).toFixed(2)
    }
})
    console.table(arrayProyeccion)
}

const carrito = [ {id: 1234, nombre: 'NOTEBOOK EXO E17', importe: 79950},
                  {id: 6789, nombre: 'IPAD PRO 12', importe: 219890},]

const carrito2 = [{id: 2345, nombre: 'MACBOOK AIR 13', importe: 749900, cantidad:1},
                  {id: 6789, nombre: 'IPAD PRO 12', importe: 219890, cantidad: 3},]

//REDUCE - Nos permite obtener un único valor tras iterar sobre el array, resume el array a un único valor de retorno
function calcularTotalCarrito(){
    //EJEMPLO 1 carrito simple
  //  let totalCarrito = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
                                    // let acc = 0; total += producto.importe - es lo que hace internamente el étodo reduce
  //      console.log ('Total carrito', totalCarrito)

    //EJEMPLO 2 - carrito múltiples unidades
    let totalCarrito = carrito2.reduce((acc, producto)=> acc + (producto.importe * producto.cantidad), 0)
        console.log ('Total carrito', totalCarrito)
}

//SORT - reordena un array según criterio que definamos
//este método es destructivo, es decir, modifica el array sobre el cual se llama
ordenamos por nombre
function ordenarProductos(){
    productos.sort((a, b)=>{
        if (a.nombre > b.nombre){
            return 1 
        }
        if (a.nombre < b.nombre){
            return -1
        }
        return 0 //si alguna de las 2 anteriores no se cumplen, si son iguales 
    })
    console.table(productos)
}
//ordenamos x imorte, pero puede ser por nombre o la categoría deseada
function ordenarProductos(){
    productos.sort((a, b)=>{
        if (a.importe > b.importe){  //se puede hacer un ordenamiento inverso, invirtiendo los signos en cada if
            return 1 
        }
        if (a.importe < b.importe){
            return -1
        }
        return 0 //si alguna de las 2 anteriores no se cumplen, si son iguales 
    })
    console.table(productos)
}

/* otros métodos, algunos no salieron aún

aún no salió - findLast()  permite buscar en un array, empezando desde la última posición
findLastIndex()
flat(1 (x ej, nivel de profundidad de ese array multidimensional, nos retorna un array nuevo con todo en el mismo nivel)) cuando tenemos un array de múltiples dimensiones, un array que contenga otro array y asu vez otro,
son 3 array diferentes, dentro de un único array. Va a dejar un único array en un único nivel con todos los otros arrays
aún no salió - group() se puede usar en un array como el de const productos, para agrupar por categoría, ej objeto portátiles y dentro de ese pone un array pone todos los que coinciden con esa categoría
Set()  - es una clase y hay que instanciarla, sacar cosas repetidas x ej, recorrer nuestro array de productos y mapear la categoría con set y generar un array de elementos con las categorías sin repetir.
        y después ya teniendo un array de elementos con las categorias, tomamos la primera categoría, filtamos el array productos y mostramos los productos asociados en esa categoría
        (combinado con filter) es lo que en un futruro va  a venir todo resueto con el método group*/