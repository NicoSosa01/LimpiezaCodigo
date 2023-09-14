
//Se crea una variable para el boton tomando el id "btn"
var boton = document.getElementById("btn");
//Se crea una variable para el box(caja) con el id "caja"
var box = document.getElementById("caja");

//Es una funcion para cambiar de color las letras
function CambiarColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    caja.style.backgroundColor = color;
}

boton.addEventListener("click", CambiarColor);
