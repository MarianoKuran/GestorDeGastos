const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault();
    let datosForm = new FormData(form);
    crearFila(datosForm)
});

function crearFila(datosForm) {
    let tabla = document.getElementById('tabla');
    let nuevaFila = tabla.insertRow(-1);

    nuevaCelda = nuevaFila.insertCell(0);
    nuevaCelda.textContent= datosForm.get('tipo_trs')
    nuevaCelda = nuevaFila.insertCell(1);
    nuevaCelda.textContent= datosForm.get('descripcion')
    nuevaCelda = nuevaFila.insertCell(2);
    nuevaCelda.textContent= datosForm.get('monto')
    nuevaCelda = nuevaFila.insertCell(3);
    nuevaCelda.textContent= datosForm.get('categoria')
}