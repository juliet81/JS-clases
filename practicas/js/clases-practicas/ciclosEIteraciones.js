/*
//CICLOS E ITERACIONES
//Ciclo for Convencional  - Tradicional
//i++ incrementa en un dígito el valor incial; i=i + 1; i+1= 1


//Array  - para definirlo,  siempre con [], los elementos guardados en el array, internamente en el array obtendrán una posición numérica, el índice de cada uno de esos elementos
const paises = ["Uruguay", "Chile", "Argentina", "Paraguay", "Perú"]
//                  0          1          2      posiciones numéricas

//debugger  =  permite pausar el ciclo
//   INICIO   LÍMITE    INCREMENTO 
for (let i = 0; i <= 21; i++) {
    console.log ("Ejecutando ciclo for" + i)
}


//Ciclo for Dinámico
for (let i = 0; i < paises.lenght; i++){
    console.log (paises[i])
}
//la propiedad .lenght, nos retorna el total de lementos del arrai, nos retorna un valor numérico, ese valor numérico nos sirve para condicionar cuántas veces se va a ejecutar el ciclo FOR


//Chile
for (let i = 0; i < paises.lenght; i++) {
    if (paises [i] === "Chile"){
        break
    }
    console.log (paises[i])
}
//break sirve para cortar la impresión o recorrido de un arrai dentro de un ciclo for, nos permite saltar dentro de la ejeución del ciclo for


for (let i = 0; i < paises.lenght; i++) {
    if (i ===){  //el país almacenado en el número 3 no se va a imprimir
        break
    }
    console.log (paises[i])
}

for (let i = 0; i < paises.lenght; i++) {
    if (i ===1 || i===3 || i===5){  
        break
    }
    console.log (paises[i])
}


//WHILE
//repetir es una variable boleana
let repetir = true
while (repetir) {
    console.log ("Este mensaje se imprime en la consola")
    repetir = confirm ('seguimos imprimiendo el bucle WHILE?')
}

let repetir = true

while (repetir) {
    let nro = parseInt(prompt ('Ingresa un número mayor a 21')) 
    if (nro >= 21){
        repetir = false
        console.warn('Al fin ingresaste un nñumero mayor a 21')
    }
}


//DO WHILE
let repetir = true

do{
    console.log('Estoy utilizando do-while')
    repetir = confirm ('Seguimos con la ejecución de do-while?') //Primero se va a imprimir
} while (repetir) //aquí se evalua, y comienza de nuevo

*/
//en éste caso se va a ejecutar una sola vez, el prompt siempre nos va a devolver un dato del tipo string, por lo tanto el do se va  aejecutar una sola vez
let textoIngresado = prompt('Ingresa un número')

do{
    console.log ('número ingresado' + textoIngresado)
} while (typeof textoIngresado === 'number')


/*
//SWITCH
let color = prompt ('Elije un color de prenda:(blanco, azul, verde, rojo, naranja')

switch (color.toLocaleLowerCase()) {    //.toLowerCase (pasa todas las letras a minúscula)
    case 'blanco':
        console.log ('Tenemos prendas en color blanco')
        break;
    case 'azul':
        console.log ('Tenemos prendas en color azul')
        break;
    case 'rojo':
        console.log ('Tenemos prendas en color rojo')
        break;
    case 'naranja':
        console.log ('Tenemos prendas en color naranja')
        break;
    default:
        console.warn ('No entendimos su elección')
}

*/
