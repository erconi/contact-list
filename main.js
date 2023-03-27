const documento = document.querySelector('.documento')
const nombre = document.querySelector('.nombre')
const apellido = document.querySelector('.apellido')
const telefono = document.querySelector('.telefono')
const ciudad = document.querySelector('.ciudad')
const direccion = document.querySelector('.direccion')
const btnAgregarTarea = document.querySelector('.btn-agregar-tareas')
const ListadoTareas = document.querySelector('.Listado-Tareas')
const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        documento: documento.value,
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        ciudad: ciudad.value,
        direccion: direccion.value,

    }
    guardarContacto(db, contacto)
}
cargarContactos(db, ListadoTareas)