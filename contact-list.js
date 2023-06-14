let contact1 = {
    id: 64869928,
    nombres: "Lina Patricia",
    apellidos: "Correa Jaraba",
    telefono: 3226370281,
    ubicaciones: {
        ciudad: "Sincelejo",
        dirección: "Calle 14 #34-09",
    }
};
let contact2 = {
    id: 98869966,
    nombre: "Luis Carlos",
    apelllidos: "Badel Vergara",
    telefono: 3024764001,
    ubicaciones: {
        ciudad: "Medellín",
        dirección: "Cra 78b #57-59 Apto 301"
    }
};
let contact3 = {
    id: 43817544,
    nombre: "Gladys",
    apellidos: "Marín Lópera",
    telefono: 3136312898,
    ubicaciones: {
        ciudad: "Medellín",
        dirección: "Transversal 2 #30-04 Apto 126"
    }
};
let contactList = [contact1, contact2, contact3];
function crearContact(id, nombres, apellidos, telefono, ciudad, dirección) {
    let contact = {
        id,
        nombres,
        apellidos,
        telefono,
        ubicaciones: {
            ciudad,
            dirección,
        }
    }
    contactList.push(contact)
};
crearContact();
function deleteContact(id) {
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].id === id) {
            contactList.splice(i, 1);
        }
    }
};
deleteContact()