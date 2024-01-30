// Storing an object in localStorage
function iniciarsesion(){
    var data = { email: "email", pass: "password" };
    localStorage.setItem('user', JSON.stringify(data));

// Retrieving and parsing the object from localStorage
    var storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('User Object:', storedUser);
}
document .getElementById('btnlogin').addEventListener('click', () => {
    iniciarsesion({})
});

        // Función para guardar datos en localStorage
function guardarEnLocalStorage() {
    var datoInput1 = document.getElementById('datoInput1');
    var datoInput2 = document.getElementById('datoInput2');
    var dato = {email: datoInput1.value, password: datoInput2.value};

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("dato", JSON.stringify(dato));
        // Actualizar la sección de visualización
        mostrarLocalStorage();
    }

        // Función para mostrar datos almacenados en localStorage
    function mostrarLocalStorage() {
        var datoRecuperado = JSON.parse(localStorage.getItem("dato"));
        var mostrar = document.getElementById('mostrarLocalStorage');
        console.log(datoRecuperado)

        // Verificamos si hay un dato almacenado
        if (datoRecuperado) {
            mostrar.textContent = "Dato almacenado en localStorage: Usuario: " + datoRecuperado.email +" password: "+datoRecuperado.password;
        } else {
            mostrar.textContent = "No hay datos almacenados en localStorage.";
        } 
    }

        // Llamamos a mostrarLocalStorage al cargar la página
        mostrarLocalStorage();
}


/* session storage */

function sesion(){
    var data2 = {Text: "text"};
    localStorage.setItem('user', JSON.stringify(data2));

// Retrieving and parsing the object from localStorage
    var storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('User Object:', storedUser);
}
document .getElementById('btnsesionStorage').addEventListener('click', () => {
    sesion({})
});


function guardarEnSesionStorage() {
    var datoInput3 = document.getElementById('datoInput3');
    var dato2 = datoInput3.value;

    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("dato2", JSON.stringify(dato2));
        // Actualizar la sección de visualización
        mostrarSesionStorage();
    }

        // Función para mostrar datos almacenados
    function mostrarSesionStorage() {
        var datoRecuperado2 = JSON.parse(sessionStorage.getItem("dato2"));
        var mostrar2 = document.getElementById('mostrarSessionStorage');
        console.log(datoRecuperado2)

        // Verificamos si hay un dato almacenado
        if (datoRecuperado2) {
            mostrar2.textContent = "Dato almacenado en SesionStorage: " + datoRecuperado2;
        } else {
            mostrar2.textContent = "No hay datos almacenados en SesionStorage.";
        }
    }

        mostrarSesionStorage();
}


