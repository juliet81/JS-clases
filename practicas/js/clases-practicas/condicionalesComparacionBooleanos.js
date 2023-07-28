//CONTROL DE FLUJOS


//VALORES BOOLEANOS - TRUE/FALSE

//let username = prompt('Ingresa ru nombre de usuario:')  //true

if (username =='julieta') {
    console.log('Bienvenid@'  + username)
}

let numeroElegido = prompt ("Ingresa un número:")
    if (numeroElegido >"25") {
        console.log("Excelente elección:" + numeroElegido)
    }


let otraVariable = "Otro valor"  //Defino variable y asigno
let nroA = 21
let nroB = 30
let nroC = 30  //variable numérica
let nroD = '30' //variable string


RESULTADO TRUE
let resultado = (nroB === nroC)
RESULTADO FALSE
let resultado = (nroC === nroD)  //valor booleano 


let unColor = prompt("Selecciona un color: (Rosa, Azul, Naranja)")

if(unColor ==="Rosa"){
    console.log("Has seleccionado el color Rosa")  //se cumple
} else {
    console.log("El color Rosa no ha sido seleccionado") //no se cumple
}


//CONDICIONES ANIDADAS/ENCADENADAS
//let ofertaEnviada = parseInt (prompt("Vendo monitor 55'. Escucho ofertas: "))
let ofertaEnviada = prompt("Vendo monitor 55'. Escucho ofertas: ")
//oferta esperada = 2000

if(ofertaEnviada < 1000){
    console.error("😠No way! Su oferta es demasiado baja")
}else if(ofertaEnviada < 2000){
    console.warn("🙄Estira un poco más tu oferta")
}else if(ofertaEnviada == '2000'){
    console.log("😊Me interesa tu oferta, conversemos")
}else if(ofertaEnviada > 2000){
    console.log("Oferta aceptada ✔. Gracias por tu compra")
}else{
    console.warn("🤔No se entendió tu oferta. Hazla nuevamente")
}

// parseFloat() - Permite tomar un dato del timo string y convertirlo en una variable numérica o retornarlo como una variable numerica.
//si ese número está representado como un string y ese númeo tiene decimales, nos va a retornar ese valor como un valor numérico, respetando los decimales.
//parseInt() - Va a hacer exactamene lo mismo, pero nos va aretornar un valor del tipo entero, sin decimales. No redondea, solo nos retorna el valor entero.



//OPERADOR LOGICO AND &&

let username = prompt ("Ingresa tu nombre de usuario")
let password = prompt ("Ingresa tu contraseña")

//si ambas condiciones no se cumplen nos va retornar un valor del tipo FALSE, porque el operador lógico AND (&&) está obligando a que se cumplan ambas condiciones
if (username === "Julieta Parra" && password === "Pimienta"){
    console.log ("Bienvenido nuevamente" + username)
}else{
    console.warn ("No se reconoce usuario y/o contraseña")
}

//OPERADOR LOGICO OR  ||

let correoE = prompt("Ingresa tu email")
let password = prompt ("Ingresa tu contraseña")

if (correoE === "parrajuliet@hotmail.com" || correoE === "julietaparra.81@gmail.com"){
    console.log ("Bienvenido nuevamente  " + correoE)
}else{
    console.warn ("Credenciales incorrectas. Inténtalo nuevamente")
}
