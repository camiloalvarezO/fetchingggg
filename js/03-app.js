const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click',cargarDatos)

function cargarDatos(){
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido');
    let html = '';

    empleados.forEach(empleado => {
        const {nombre,id,empresa,trabajo} = empleado;

        html += `
        <p>${nombre}</p>
        <p>${id}</p>
        <p>${empresa}</p>
        <p>${trabajo}</p>
        `
    });
    contenido.innerHTML = html;    
}