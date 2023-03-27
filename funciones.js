const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'

}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)
    console.log(claves)
    for (claves of claves) {
        let contacto = JSON.parse(db.getItem(claves))
        crearContacto(parentNode, contacto, db)

    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let documentoContacto = document.createElement('p')
    let nombreContacto = document.createElement('p')
    let apellidoContacto = document.createElement('p')
    let telefonoContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    documentoContacto.innerHTML = contacto.documento
    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    telefonoContacto.innerHTML = contacto.telefono
    ciudadContacto.innerHTML = contacto.ciudad
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = ' delete_forever'

    divContacto.classList.add('Tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'

    }


    divContacto.appendChild(documentoContacto)
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)


}