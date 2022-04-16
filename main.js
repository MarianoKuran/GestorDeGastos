const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault();
    let datosForm = new FormData(form);
    let trsObj = datosFormAtrsObj(datosForm)
    guardarTrsObj(trsObj)
    crearFila(trsObj)
});

document.addEventListener('DOMContentLoaded', function (event){
    let trsObjArr = JSON.parse(localStorage.getItem('trsDatos'))
    trsObjArr.forEach(arrElement => {
        crearFila(arrElement)
    });
})

function datosFormAtrsObj(datosForm){
    let tipo_trs = datosForm.get('tipo_trs')
    let descripcion = datosForm.get('descripcion')
    let monto = datosForm.get('monto')
    let categoria = datosForm.get('categoria')
    return {
        'tipo_trs': tipo_trs,
        'descripcion': descripcion,
        'monto': monto,
        'categoria': categoria
    }
}

function crearFila(trsObj) {
    let tabla = document.getElementById('tabla');
    let nuevaFila = tabla.insertRow(-1);

    nuevaCelda = nuevaFila.insertCell(0);
    nuevaCelda.textContent= trsObj['tipo_trs'];
    nuevaCelda = nuevaFila.insertCell(1);
    nuevaCelda.textContent= trsObj['descripcion'];
    nuevaCelda = nuevaFila.insertCell(2);
    nuevaCelda.textContent= trsObj['monto'];
    nuevaCelda = nuevaFila.insertCell(3);
    nuevaCelda.textContent= trsObj['categoria'];
}

function guardarTrsObj(trsObj){
    let trsArr = JSON.parse(localStorage.getItem('trsDatos')) || [];
    trsArr.push(trsObj)
    let trsArrJSON = JSON.stringify(trsArr)
    localStorage.setItem('trsDatos', trsArrJSON);
}