
const db = require('../DB/mysq.js');

const TABLA = 'auth';

/* function todos() {
    return db.todos(TABLA);
}
function uno(id) {
    return db.uno(TABLA,id);
} */
function agregar(data) {
    const authData ={
        id: data.id,
    }
    if (data.usuario) {
        authData.usuario = data.usuario
    }
    if (data.password) {
        authData.password = data.password
    }
    return db.agregar(TABLA, authData)
}
function eliminar(body) {
    return db.eliminar(TABLA,body);
}

module.exports = {
    
    eliminar,
    agregar
}