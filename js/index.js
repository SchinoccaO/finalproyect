

function iniciarSesion(){
    var data = {email:"email", pass: 'password'};
    localStorage,setItem('User', JSON.stringify(data));

    var storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('User object: ', storedUser);


    document .getElementById('btnlogin').addEventListener('click', ()=>{
        iniciarSesion({})
    });
}