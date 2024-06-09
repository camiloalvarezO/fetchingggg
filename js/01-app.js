const cargarBtn = document.querySelector('#cargarTxt')

cargarBtn.addEventListener('click',cargarTexto);



function cargarTexto(){

    const url = '/data/datos.txt';

    fetch(url)
            .then(resultado =>{
                console.log(resultado);
                console.log(resultado.status);
                console.log(resultado.url);
                console.log(resultado.ok);
                return resultado.text();
            })
            .then(datos => {
                console.log(datos);
            })
            .catch(error =>{
                console.log(error);
            })
}