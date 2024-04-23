

console.log('Hola Mundo!')

window.addEventListener('load', () =>{

    const submitButton = document.querySelector('#submit');
    submitButton?.addEventListener('click',  (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value; //seleccionar el id del objeto, toma el valor del objeto ingresado
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        if (name !=='' & email !=='' & message !=='' ){ //completa
            document.querySelector('#user-name').innerHTML = name;
            document.querySelector('#user-email').innerHTML = email;
            document.querySelector('#user-message').innerHTML = message;
        } else{ //error
            document.querySelector('#error').classList.add('show-error'); //asigna clase error a show-error y show-error al tener en css el display block se ejecuta

        }
    })
    document.querySelector('#get-user').addEventListener('click', getUser);
/* METODO QUE IMPRIME EN PANTALLA UN CARTEL A TRAVER DE HACER CLICK EN ENVIAR */
});
function getUser() { //llamada a API externa
    fetch('https://randomuser.me/api/')
        .then((data) => {
            return data.json();
        })
        .then((response) =>{
            const userData = response.results[0].name;
            document.querySelector('#user-name').innerHTML = `${userData.title}. ${userData.first}  ${userData.last}` ;
        })
}