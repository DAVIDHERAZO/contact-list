let contactos = ["Sergio Correa", "Daisy Pineda", "Leonardo Acosta", "Dairo Perez"];
function agregarContacto(nombreApellido) {
    contactos.unshift(nombreApellido);
}
agregarContacto("Santiago Restrepo");
function eliminarContacto(nombreApellido) {
    let eliminar = contactos.indexOf(nombreApellido);
    if (eliminar === -1) {
        contactos.pop(eliminar);
    }
}
eliminarContacto();
function imprimirContactos() {
    contactos.forEach((contactos, indice) => {
        console.log(`${indice + 1}.${contactos}`);
    }
    );
}
imprimirContactos();