const cargarAPI = document.querySelector('#cargarAPI');

cargarAPI.addEventListener('click', cargarDatos);


function cargarDatos(){
    const url  = 'https://picsum.photos/list';

    fetch(url)
        .then(resultado => resultado.json())
        .then(respuesta => mostrarHTML(respuesta));
}


function mostrarHTML(fotos){
    const contenido = document.querySelector('.contenido');

    let html = '';

    fotos.forEach(foto => {
        const {author,post_url} = foto;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `

    });
    contenido.innerHTML = html;
}