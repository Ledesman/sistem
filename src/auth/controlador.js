
const db = require('../DB/mysq.js');

const TABLA = 'auth';
const bcrypt = require('bcrypt')

/* function todos() {
    return db.todos(TABLA);
}
function uno(id) {
    return db.uno(TABLA,id);
} */
async function agregar(data) {
    const authData ={
        id: data.id,
    }
    if (data.usuario) {
        authData.usuario = data.usuario
    }
    if (data.password) {
        authData.password = await bcrypt.hash(data.password.toString(), 5); 
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