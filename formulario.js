// Selecciona el formulario y asigna un evento de envío
var formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
    // Evita que el formulario se envíe de forma predeterminada
    e.preventDefault();

    // Obtiene los elementos del formulario
    var n = formulario.elements[0];
    var e = formulario.elements[1];
    var na = formulario.elements[2];

    // Obtiene los valores de los elementos
    var nombre = n.value;
    var edad = parseInt(e.value); // Convierte la edad a un número entero
    var i = na.selectedIndex;
    var nacionalidad = na.options[i].value;

    // Muestra los valores en la consola
    console.log(nombre, edad);
    console.log(nacionalidad);

    // Valida los campos
    if (nombre.length === 0) {
        // Agrega una clase de error si el campo está vacío
        n.classList.add("error");
    }

    if (edad < 18 || edad > 120) {
        // Agrega una clase de error si la edad no es válida
        e.classList.add("error");
    }

    // Si los campos son válidos, agrega el invitado
    if (nombre.length > 0 && edad >= 18 && edad <= 120) {
        agregarInvitado(nombre, edad, nacionalidad);
    }
};

// Función para agregar un invitado
function agregarInvitado(nombre, edad, nacionalidad) {
    // Convierte el código de nacionalidad a un texto legible
    switch (nacionalidad) {
        case "ar":
            nacionalidad = "Argentina";
            break;
        case "mx":
            nacionalidad = "Mexicana";
            break;
        case "vnzl":
            nacionalidad = "Venezolana";
            break;
        case "per":
            nacionalidad = "Peruana";
            break;
    }

    // Obtiene la lista de invitados
    var lista = document.getElementById("lista-de-invitados");

    // Crea un elemento de lista para el invitado
    var elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista"); // Corrige el error en la función add

    lista.appendChild(elementoLista);

    // Función para crear un elemento de descripción y valor
    function crearElemento(descripcion, valor) {
        var spanNombre = document.createElement("span");
        var inputNombre = document.createElement("input");
        var espacio = document.createElement("br");

        spanNombre.textContent = descripcion + ": ";
        inputNombre.value = valor;

        elementoLista.appendChild(spanNombre);
        elementoLista.appendChild(inputNombre);
        elementoLista.appendChild(espacio);
    }

    // Crea los elementos de descripción y valor
    crearElemento("Nombre", nombre);
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);

    // Crea un botón para eliminar el invitado
    var botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";

    elementoLista.appendChild(botonBorrar);

    // Asigna un evento de clic al botón de eliminar
    botonBorrar.onclick = function() {
        // Elimina el elemento de lista
        botonBorrar.parentNode.remove();
    };
}

// Selecciona el botón de borrar y asigna un evento de clic
var botonBorrar = document.querySelector("#borrar");    