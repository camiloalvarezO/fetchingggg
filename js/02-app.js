const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', leerJSON)


function leerJSON(){
    
    fetch('/data/empleado.json')
        .then(resultado => resultado.json())
        .then(respuesta => mostrarHTML(respuesta));
}


function mostrarHTML({nombre,id,empresa,trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>${nombre}</p>
        <p>${id}</p>
        <p>${empresa}</p>
        <p>${trabajo}</p>
    `
}