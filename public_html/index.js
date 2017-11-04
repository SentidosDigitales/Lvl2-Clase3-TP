/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function calcular(boton) {
    operacion = boton.value;
    var valor1= +document.getElementById("valor1").value;
    var valor2= +document.getElementById("valor2").value;
    switch (operacion) {
        case "1":
            console.log(suma(valor1, valor2));
            break;
        case "2":
            console.log(resta(valor1, valor2));
            break;
        case "3":
            console.log(multiply(valor1, valor2));
            break;
        case "4":
            console.log(divide(valor1, valor2));
            break;
    }
}

function suma(valor1, valor2) {
    return valor1 + valor2;
}
function resta(valor1, valor2) {
    return valor1 - valor2;
}
function multiply(valor1, valor2) {
    return valor1 * valor2;
}
function divide(valor1, valor2) {
    return valor1 / valor2;
}