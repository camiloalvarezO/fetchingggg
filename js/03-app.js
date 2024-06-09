const cargarJSONArray = document.querySelector('#cargarJSONArray')
cargarJSONArray.addEventListener('click', cargarJSON)

function cargarJSON(){
    url = 'data/empleados.json'
    fetch(url)
        .then(resultado => resultado.json())
        .then(respuesta => mostrarHTML(respuesta))
        .catch(error => console.log(error))
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('#contenido')

    let html = '';

    empleados.forEach(empleado => {
        const {nombre, empresa, trabajo, id} = empleado
        html += `
        <p>empresa: ${empresa}</p>
        <p>nombre: ${nombre}</p>
        <p>trabajo: ${trabajo}</p>
        <p>id: ${id}</p>
        `;
        contenido.innerHTML = html;
    });

}