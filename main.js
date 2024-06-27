
function esPalindromo(texto) {
    // Eliminar espacios y convertir a minúsculas
    texto = texto.replace(/ /g, "").toLowerCase();

    // Invertir la cadena
    var textoInvertido = texto.split("").reverse().join("");

    // Comparar la cadena original con la invertida
    return texto === textoInvertido;
}

function generarPalindromo(longitud) {
    // Definir el alfabeto
    var letras = "abcdefghijklmnopqrstuvwxyz";

    // Generar un string aleatorio
    var palindromo = "";
    for (var i = 0; i < longitud / 2; i++) {
        var indiceAleatorio = Math.floor(Math.random() * letras.length);
        palindromo += letras[indiceAleatorio];
    }

    // Agregar la mitad invertida del palíndromo
    palindromo += palindromo.split("").reverse().join("");

    return palindromo;
}

function inipalindromo() {
    // Verificar si una cadena es un palíndromo
    var texto = document.getElementById("ftext").value;
    var msj = "";
    var msj2 = "";
    // Generar un palíndromo aleatorio de 8 caracteres
    var palindromoAleatorio = generarPalindromo(8);
    msj2 = "Palíndromo aleatorio : " + palindromoAleatorio;

    if (esPalindromo(texto)) {
        msj = texto + " es un palíndromo";
        alert(msj);
        alert(msj2);
    } else {
        msj = texto + " no es un palíndromo";
        alert(msj);
    }

}


