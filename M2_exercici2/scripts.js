


function miFuncion(){
var numero1 = parseFloat(prompt("Si us plau, introdueix el primer número:"));
var numero2 = parseFloat(prompt("Si us plau, introdueix el segon número:"));

var x = numero1 + numero2;  //Suma de les dos variables
var w = numero1 - numero2;  //Resta de les dos variables
var y = numero1 * numero2;  //Multiplicació de les dos variables
var z = numero1 / numero2;  //Divisió de les dos variables


    let mensaje = document.getElementById("cajaTexto").value;   //Recull el valor de un input text
    document.getElementById("mostrarDatos").innerHTML = "El resultat de la suma és " + x + ","+ " el resultat de la resta és " + w + "," + " el resultat de la multiplicació és " + y + "," +
    " i el resultat de la divisió és " + z;  //Dona valor a un pàrraf

window.alert("El resultat de la suma és " + x + ","+ " el resultat de la resta és " + w + "," + " el resultat de la multiplicació és " + y + "," +
" i el resultat de la divisió és " + z);

console.log("El resultat de la suma és " + x + ","+ " el resultat de la resta és " + w + "," + " el resultat de la multiplicació és " + y + "," +
" i el resultat de la divisió és " + z); //Missatge per a la consola
}