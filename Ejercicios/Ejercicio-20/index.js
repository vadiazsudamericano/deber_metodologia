"use strict";

const calcularIVA = (precio) => {
    let iva = precio * 0.12; 
    let precioTotal = precio + iva;  
    alert("Precio total con IVA: " + precioTotal);
}


let precioUsuario = parseFloat(prompt("INGRESE UN PRECIO"));

calcularIVA(precioUsuario);

