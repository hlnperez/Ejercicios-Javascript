


function miFuncion(){
var nom = prompt("Hola! Introdueix el teu nom");
var cognom = prompt("Introdueix el teu cognom");
var edat = prompt("Introdueix la teva edat");

    let mensaje = document.getElementById("cajaTexto").value;   //Recoger valor de un input text
    document.getElementById("mostrarDatos").innerHTML = "Hola nois! soc " + nom + " " + cognom + " i tinc " + edat + " anys"   //Dar valor por ejemplo a un párrafo

window.alert("Hola nois! soc " + nom + " " + cognom + " i tinc " + edat + " anys ");
console.log("Hola nois! soc " + nom + " " + cognom + " i tinc " + edat + " anys ");
}