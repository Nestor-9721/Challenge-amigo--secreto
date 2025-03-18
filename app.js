
//variables
const listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
//console.log(ulListaAmigos)

function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("Por favor, debes ingresar un nombre");
        return;
    } 
    
    if (listaAmigos.includes(inputAmigo.value)) {
        alert("Este nombre ya fue ingresado");
        return;
    }  
    
    listaAmigos.push(inputAmigo.value);
    //Muestra la lista de amigos que se digito.
    //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo() {
    const aleatorio = Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[aleatorio];
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;
}