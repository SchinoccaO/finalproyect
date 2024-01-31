

function iniciarSesion(){
    var data = {email:"email", pass: 'password'};
    localStorage,setItem('User', JSON.stringify(data));

    var storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('User object: ', storedUser);


    document .getElementById('btnlogin').addEventListener('click', ()=>{
        iniciarSesion({})
    });
}

// Hacer una solicitud GET
function armarApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('La solicitud falló');
        }
        // Convertir la respuesta a formato JSON
        return response.json();
    })
    .then(data => {
        // Manipular los datos recibidos
        console.log(data);
    })
    .catch(error => {
        // Capturar errores de la solicitud
        console.error('Error:', error);
    });

}
armarApi();