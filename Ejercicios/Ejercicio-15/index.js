"use strict";

let base_1 = 10;
let base_2 = 20;

let a = parseFloat(prompt("Ingrese un valor"));

if (a >= base_1 && a <= base_2) {
  alert("El valor ingresado está entre " + base_1 + " y " + base_2);
} else {
  alert("El valor ingresado no está en el rango.");
}

