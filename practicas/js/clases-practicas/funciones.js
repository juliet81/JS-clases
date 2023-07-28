
//VARIABLES GLOBALES
let username = 'CODERHOUSE'
let usuarioLogueado;
const IVA =  1.21 //Impuesto al valor agregado, TAX

//La función tiene que transmitir lo que hace
// Verbo imperativo


function login() {
        //acá va el código de la función
}

function iniciarSesion() {
    let username = prompt('Ingresá tu nombre de usuario:')
    if (username){
        alert ('✔Bienvenid@' + username) 
    } else ('❌Error en el valor ingresado' + username)
}

//Aquí invocamos la funcion para que se ejecute automáticamente
iniciarSesion() 




function calcularResultado (nroA, nroB){
    let resultado = nroA * nroB
        console.log (resultado)
}

let numeroA = prompt ('Ingresa el primero número:')
let numeroB = prompt ('Ingresa el segundo número:')
calcularResultado (numeroA, numeroB)

                                         //el operador aritmético se pasa entre ''
function calculadora (primerNro, segundoNro, opArit){
    switch (opArit) {
        case '+':
            return primerNro + segundoNro
        case '-':
            return primerNro - segundoNro
        case '/':
            return primerNro / segundoNro
        case '*':
            return primerNro * segundoNro  
        default:
            return "Error en el cálculo"
    }
}

function utilizarVariable(){
    console.log ('Valor de username', username)

    let nuevoResultado = calculadora(555,777, '*')
    console.log ('Calcular resultado de la operación', nuevoResultado)
}

let resultado = 1234
console.log(resultado)

function concatenarNumeros(numA, numB){
    let resultado = String(numA) + String(numB)
        console.log(resultado)
}