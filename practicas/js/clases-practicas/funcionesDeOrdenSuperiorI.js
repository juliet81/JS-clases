//FUNCIONES DE ORDEN SUPERIOR

//funciones: alert, prompt, confirm, console.log, console.warn, console.error, console.table, 
function sumarNumeros (nroA, NroB, fn) {
    let resultado = nroA+NroB
    fn(resultado)
}

//METODOS DE ORDEN Y DE BUSQUEDA
//FOR EACH - itera sobre el arrayy x cada elemento ejecuta la funcióon que enviamos por parámetro, la cual recibea su vez el elemento del array que se está recorriendo
const productos = [{id: 1234, imagen:'💻', nombre: 'NOTEBOOK EXO E17', importe: 79950, categoria: 'Portátiles'},
                   {id: 2345, imagen:'💻', nombre: 'MACBOOK AIR 13', importe: 749900, categoria: 'Portátiles'},
                   {id: 3456, imagen:'💻', nombre: 'LENOVO IDEAPAD 13', importe: 199949, categoria: 'Portátiles'},
                   {id: 4567, imagen:'🖥️', nombre: 'LENOVO GAMER 15', importe: 609090, categoria: 'Desktop'},
                   {id: 5678, imagen:'🖥️', nombre: 'ASUS GAMING PRO 17', importe: 679800, categoria: 'Desktop'},
                   {id: 6789, imagen:'📱', nombre: 'IPAD PRO 12', importe: 219890, categoria: 'Tablets'},
                   {id: 7890, imagen:'📱', nombre: 'PAD DROID 10.1', importe: 119960, categoria: 'Tablets'},
                   {id: 8901, imagen:'📱', nombre: 'IPAD MINI 7.9', importe: 229900, categoria: 'Tablets'},
                   {id: 9012, imagen:'⌚️', nombre: 'SMARTWATCH 1.8', importe: 29900, categoria: 'Relojes'}]

function recorrerArrayProductos() {
    //iterar - recorrer el array de principio a fin
        //toma cada elemento u objeto y lo pasa como parámetro
        //for convencional y for ....of
        // for (const elemento of array){
        //recorre el array por el ciclo for of y cada elemento u objeto del array se lo pasa al valor "elemento" como parámetro
        //    console.log (elemento)
   // }
   // forEach es el más rápido para iterar un aray numeroso
    productos.forEach((producto)=>{
        console.log(producto)
    })
}
/*
function buscarProducto() {
    //Find: busca un elemento u objeto en el array
        Recorre el array de principio a fin
        Cuando encuentra la coincidencia, retoma el elemento u objeto
        Cuando retornó, deja de iterar el array
        Si no encontró nada, retorna "undefined"
    let codigo = parseInt(prompt('Ingresa el código de producto a buscar: ')) //prompt siempre retorna como cadena de texto, sin el parseInt no lee el número, compara valor y tipo de dato

    let resultado = productos.find((producto)=> producto.id === codigo)//si pido numero === tiene que coincidir con lo solicitado en el prompt      
       if(resultado === undefined){
        console.warn('No se encontró producto con dicho código', codigo)
       }else{
        console.log (resultado)
       }
}

function filtrarProductos(){
    //
    Itera el array de principio a fin
    Busca uno o más elementos u objetos que coincidan con el parámetro indicado
    Retorna un array con el o los elementos u objetos si encuentra coincidencia 
    Sino retorna un array vacío
    
    let codigo = parseInt(prompt('Ingresa el código de producto a buscar: ')) //prompt siempre retorna como cadena de texto, sin el parseInt no lee el número, compara valor y tipo de dato

    let resultado = productos.filter((producto)=> producto.id === codigo)//si pido numero === tiene que coincidir con lo solicitado en el prompt      
       if(resultado.length === 0){ //retorna array vacío 
        console.warn('No se encontraron productos con dicho código', codigo)
       }else{
        console.table (resultado)
       }
}

function filtrarProductos(){
    
    let cat = prompt('Ingresa la categoría de productos a buscar: ') 

    let resultado = productos.filter((producto)=> producto.categoria === cat)      
       if(resultado.length === 0){ 
        console.warn('No se encontraron categorías con el nombre', cat)
       }else{
        console.table (resultado)
       }
}
*/

function filtrarProductos(){
    
    let nombre = prompt('Ingresa (parte) del nombre del producto a buscar: ') 

    let resultado = productos.filter((producto)=> producto.nombre.toUpperCase().includes(nombre.toUpperCase()))      
       if(resultado.length === 0){ 
        console.warn('No se encontraron productos con dicho nombre', nombre)
       }else{
        console.table (resultado)
       }
}

//SOME - sirve para ver si tengo un producto cargado en un carrito o no, para poder agregarlo desde 0 
// ó si existe en un carrito el producto cargadouna columna y ese prodicto tiene una columna llamada cantidad, incrementar en un dígito la cantidad

//productos.some((producto)=> producto.id === 3456)
//va responde con un booleano (true o false)
//let existe = productos.some((producto)=> producto.id === 9988)
//retorna undefined
//existe   retorna false

