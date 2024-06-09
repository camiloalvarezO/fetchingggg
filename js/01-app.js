const cargarBtnText = document.querySelector('#cargarTxt')
cargarBtnText.addEventListener('click', obtenerDatos)

function obtenerDatos(){

    // hay 2 formas de usar fetch, es nativo de js
    // fetch('data/datos.txt') 
    url = 'data/datos.txt';

    fetch(url)// ya fetch tiene el resolve y el reject, no hay porqué colocarselo
    .then(resultado => { 
        console.log(resultado)
        console.log(resultado.statusText)
        console.log(resultado.headers)
        console.log(resultado.url)
        return resultado.text();
    })
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => console.log(error))
}