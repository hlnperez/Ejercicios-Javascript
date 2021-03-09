


function miFuncion(){
    let num1 = document.getElementById("numero1").value;//Recoger valor de un input text numero 1
    let num2 = document.getElementById("numero2").value;//Recoger valor de un input text numero 2

    document.getElementById("mostrarDatos").innerHTML = "El resultat de la suma és: " + (Number(num1) + Number(num2)) + ", el resultat de la resta és: " + (Number(num1) - Number(num2)) + ", el resultat de la multiplicació és: " + (Number(num1) * Number(num2)) + " i el resultat de la divisió és: " + (Number(num1) / Number(num2));
}