
const db = require('../DB/mysq.js');

const TABLA = 'auth';
const bcrypt = require('bcrypt')

const auth = require('../../src/authToken/index.js')
/* function todos() {
    return db.todos(TABLA);
}*/
async function login(usuario, password) {
    const data = await db.query(TABLA, {usuario: usuario});

    return bcrypt.compare(password, data.password)
    .then(resultado => {
        if (resultado === true) {
            //Generear un token
            return auth.asignarToken({...data})
        }else {
            throw new Error('Informacion Invalida');
        }
    })
} 
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
    agregar,
    login,

}