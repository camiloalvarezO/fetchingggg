const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos)

function obtenerDatos(){
    url = 'data/empleado.json'
    fetch(url).then(resultado => resultado.json())
    .then(datos => mostrarHTML(datos));
}

function mostrarHTML({empresa,nombre,trabajo,id}){

    const h1 = document.querySelector('h1')

    h1.innerHTML = `
        <p>empresa: ${empresa}</p>
        <p>nombre: ${nombre}</p>
        <p>trabajo: ${trabajo}</p>
        <p>id: ${id}</p>
    `
}
