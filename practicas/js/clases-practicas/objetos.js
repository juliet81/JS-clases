/*
let nombre = "Homero"
let edad = "38"
let ocupación = "Operario"

let nombre2 = "Marge"
let edad2 = "36"
let opcuacion2 = "Ama de casa"


1999 - ES2 - Objeto literal
2009 - ES5 - Funciones constructoras
2015 - ES6 - Clases JS (basadas en método constructor)


// OBJETO LITERAL

//se recomienda declarar todas las estructuras de objeto utilizando la palabra reservada const y no let, por una cuestión de seguridad
// la variable const nos permite cuidar la estructura del objeto
const empleado1 = {nombre: 'Joe Mamilian', ocupación: 'CEO', edad: 38, fechaIngreso: '1981-03-01'}//formato ISO -  formato de fecha en casi todos los programas de programación
const empleado2 = {nombre: 'Cameron Howe', ocupación: 'programadora', edad: 28, fechaIngreso: '2008-05-25'}
const empleado3 = {nombre: 'Gordon Clarck', ocupación: 'QA', edad: 34, fechaIngreso: '2017-08-15'}

//para poder leer el nombre hay que nombrar la propiedad primero x ej
console.log (empleado1.nombre)


// Si queremos cambiar el valor de una variable podemos de la siguiente manera
empleado1.edad = 45

//para leer una de las propiedades específicamente
console.log(empleado1["nombre"])


//aunque hoy en día es más sencillo de la siguiente manera
//const nos mantiene la estructura del objeto pero cualquiera de sus propiedades puede ser cambiada x ej
console.log(empleado1.nombre)


//FUNCIONES CONSTRUCTORAS - 2009
//se declara con la palabra reservada function, a continuación el nombre del objeto y dentro de los paréntesis los parámetros y dentro de las llaves de bloque, las propiedades
// y a diferencia de las funciones convenionales es que la primer letra va en mayúscula
//función convencional: function escribirIVAEnConsola(){ console.log(IVA)}
//se antepone el thisx oficia como sinónimo y hace que quede atada a cada nomnbre que hayamos definido, id, nombre, etc; como es una plantilla, lla funcion constructora, la vamos a clonar las veces que sea necesario, cada una de las propiedades no puede estar atada al ombre de la funcion contructora en este caso Producto
//this enlaza la propiedad con el objeto instaniado
function Producto (id, nombre, importe, stock){
    this.id = id;
    this.nombre = nombre;
    this.importe = importe;
    this.stock = stock;
    this.obtenerImporteConIVA = function (iva) {
        return this.importe - iva
    }
    this.verificarPuntoDePedido = function (){
        if (this.stock<10){
            return "Debes reponer el stock cuanto antes ("+ this.stock + ")"
        }else{
            return "El stock es óptimo ("+ this.stock + ")"
        }
    }
    this.descontarDelStock = function(unidades){
        if(this.stock - unidades >= 0){
            //this.stock = this.stock - unidades
            this.stock -= unidades //alternativa más corta
            return this.stock
        }else{
            console.error("No se pueden descontar las unidades informadas:" + unidades)
        }
    }
}

const producto1 = new Producto (1,"MC BOOK PRO", 1800, 28 )
const producto2 = new Producto (2, "AIPAD AIR", 280, 40)
const producto3 = new Producto (3, "APPLE WATCH", 99, 15)

const IVA = 1.21

*/
//CLASES - es un poco más limpia que las funciones constructoras
//Funcion constructora
class Producto {
    constructor(id, nombre, importe, stock) {
        this.id = id;
        this.nombre = nombre;
        this.importe = importe;
        this.stock = stock;
    }
    obtenerImporteConIVA(iva) { //quitamos el this y el function
        return this.importe - iva
    };
    verificarPuntoDePedido () {
        if (this.stock < 10) {
            return "Debes reponer el stock cuanto antes (" + this.stock + ")";
        } else {
            return "El stock es óptimo (" + this.stock + ")";
        }
    };
    descontarDelStock (unidades) {
        if (this.stock - unidades >= 0) {
            //this.stock = this.stock - unidades
            this.stock -= unidades; //alternativa más corta
            return this.stock;
        } else {
            console.error("No se pueden descontar las unidades informadas:" + unidades);
        }
    };
}