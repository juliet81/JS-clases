/*//ARRAYS
//mi machete de otros paises "Surinam", "Ecuador", "Colombia", "Brasil"
const paises = ["Argentina", "Uruguay", "Chile", "Paraguay", "Ecuador", "Colombia"]
//Índice            0           1           2          3        4           5           

const arrayGenerico = ["Coder", "House", 123, 765, true, false] //puden ser valores string, numéricos, bbooleanos
const paisesDelNorte = ["USA", "Mexico", "Canada", "Alaska", "Costa Rica", "Panamá", "Cuba", "Haiti", "Jamaica", "Pueeto Rico"]

//const paisesDeAmerica = paises.concat(paisesDelNorte) //concatena 2 arrays
//const paisesDeAmerica = paises.concat(paisesDelNorte.concat(paisesAmericaCentral)) //x ej para concatenar más arrays

// JOIN - podemos generar un string con todos los elementos del array, separados por el valor que presentamos por parámetro, es necesario colocar - ó , ó cualqier caracter
// EJ paises.join (" - ")
//PARA LEER EN CONSOLA EN FORMA DE LISTA console.table(nombre del array)


// i (es de índice)
function recorrerPaises() { 
    for(let i = 0; i <= 5; i++)
    console.log (paises[i])


//otra forma de no limitar el índice del array en con lenght
function recorrerPaises() { 
    for(let i = 0; i < paises.length; i++)
    console.log (paises[i])
}

function agregarPais () {
    let nuevoPais = prompt("Ingresa el nuevo país a agregar en el array")
    if (nuevoPais.trim !== ""){   //trim es una validación
        paises.push(nuevoPais) //push agrega elemento al final de la lista, a diferencia de unshift que los agrega al inicio del array
        console.clear  //clear limpia la consola de js
        console.table(paises) //aquí volvemos a llamar lueo de que clear haya limpiado la pantalla
    }
}
//si quiero quitar elementos del array
function quitarPais () {
    console.clear()
    let paisQuitado = paises.pop() //quita el último elemento del array. Se puede atratar dentro de una variable let, paises.pop
    //paises.shift() quita el primer elemento del array
    alert("Se ha quitado un país del array" + paisQuitado)
    console.table(paises)
} 
}

function quitarPais () {
    console.clear()
    let paisAquitar = prompt ("Seleccione el país a quitar del array: ")

    //capturar el índice de dicho país en el array
    let indice = paises.indexOf(paisAquitar)
    if (indice === -1){ //no se encontró el elemento
        console.warn ("No se encontró el elemento indicado")
    }else{
        let paisQuitado = paises.splice(indice, 1) //a modo de ejemplo  // SPLI SIGNIFICA EMPALMAR
        console.log ("Se ha quitado a " + paisQuitado + "del array")
    }

// paises.splice (4)  // desde dicho índice, elimina ese elemento y todos los que le siguen
// paises.splice (4, 1, "Nuevo elemento") // Reemplaza el elemento de dicho índice por el informado

    let paisQuitado = paises.pop() //quita el último elemento del array. Se puede atratar dentro de una variable let, paises.pop
    //paises.shift() quita el primer elemento del array
    alert("Se ha quitado un país del array" + paisQuitado)
    console.table(paises)
} 

//SLICE  -  devuelve una copia de una parte del array dentro de un nuevo array
// hay que colocar un primer parámetro (ej 1) y un segundo parámetro (ej 4) indicando hasta dónde irá el neuvo array, no inluye al elemento del segundo parámetro
const paisesAbreviados = paisesDeAmerica.slice (1,5)

//INCLUDES - nos permite saber si un elemento que recibo por parámetro existe o no dentro del array, retornando un valor booleano
// paises.includes("Surinam") // retorna true

function agregarPais () {
    let nuevoPais = prompt("Ingresa el nuevo país a agregar en el array")
    if (nuevoPais.trim !== ""){   
        if (paises.includes(nuevoPais)){
            console.warn ("El país ya existe en el Array", nuevoPais)
        }else{
            paises.push(nuevoPais) 
            console.clear  
            console.table(paises) 
        } 
    }
}

//REVERSE - Nos permite invertir el orden de los elementos dentro de un Array
//SORT - Ordena los elementos de forma ascendente, ej, de la a-z en mayúscula luego en minúscula
function ordenarPaises () {
    //encadenamiento de métodos, ej:
    paises.sort().reverse()
    console.table(paises)
}

//INDEXOFF - Se utiliza para buscar en un Array de elementos, nos permite pasar un texto y ver si ese texto existe en el array, si existe en el array, nos retorna la posición de sese elemento en el array, si no existe nos retorna -1
*/

//ARRAY DE OBJETOS
/*
const productos = [{id: 1, nombre: "Teclado inalámbrico", precio: 1115, stock: 20},
                   {id: 2, nombre: "Mouse inalámbrico", precio: 800, stock: 40},
                console.table (productos)
]

//creamos una función para que genere números aleatorios

const creoID = ()=> parseInt(Math.random()*1_000_000)
const productos = []

function agregarProductos (){
    let id = creoID()
    let nombre = prompt ("Ingresa el nombre del producto: ")
    let importe = parseFloat (prompt ("Ingrese el importe del producto:")) //parseFloat es para permitir decimales
    let nuevoProducto = {id: id, nombre: nombre, importe: importe}
    productos.push(nuevoProducto)
    console.clear()
    console.table(productos)
}*/
/*
    .push()     //agregar elementos en la última posición
    .pop()      //elimina elemento (de la última posición)
    .slice()    //cortar y generar un nuevo array con determinados elementos
    .splice()   //eliminar un elemento de un array, (eliminar varios), reemplazar un elemento por otro
    .join()     // ", " " - " 
    .concat()   //fusionar varios arrays
    .sort()     // ordenar arrays ASC, 
    .reverse()  // invertir posición de elementos del array
    .sort().reverse() //ordenamiento descendente

    ARRAY DE ELEMENTOS utiliza indexOf
    RRAY DE OBJETOS utiliza findIndex
*/