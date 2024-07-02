let numeroSecreto =0;
let numeroIntentos=1;
let listaNumeroSorteados=[];
let numeroMaximo= prompt("Por favor indica el número maximo que te ayudará a encontrar todos los número sorteados");

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
        
}
function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if(numUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${numeroIntentos} ${(numeroIntentos===1)? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else 
        
        if(numUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
    }else{
        asignarTextoElemento('p', 'El número secreto es mayor');
    
    }
    numeroIntentos++;
    limpiarcaja();
    return;
}

function limpiarcaja() {
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value="";
}

function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los número, mostrar un mensaje en pantalla para cerrar el juego
    if (listaNumeroSorteados.length==numeroMaximo) {
        asignarTextoElemento('p',`Ya se sortearon todos los número posible`);
        
    }
    else{
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    // Si el número generado esta inlcuido en la lista, hacemos una operación si no, hacemos otra



}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
        
}

function reiniciarJuego() {
    //Limpiar la caja - 
    limpiarcaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales;
    //Generar un número aleatorio
    condicionesIniciales();
    // inicializar el número de intento
    intentos =1;
    
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');    



}

condicionesIniciales();

alert("Mensaje de prueba con gitHud");