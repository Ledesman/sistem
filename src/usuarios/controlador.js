
const db = require('../DB/mysq.js');

const TABLA = 'usuarios';

const auth = require('../auth/controlador.js')

function todos() {
    return db.todos(TABLA);
}
function uno(id) {
    return db.uno(TABLA,id);
}
function eliminar(body) {
    return db.eliminar(TABLA,body);
}
async function agregar(body) {
    const usuario = {
        id: body.id,
        nombre: body.nombre,
        activo: body.activo
    }
   const respuesta = await db.agregar(TABLA,usuario);
   console.log('respuesta', respuesta)
   var insertId = 0;
    if (body.id == 0) {
        insertId = respuesta.insertId;
    }else{
        insertId = body.id;
    }
    var respuesta2 =  '';
    if (body.usuario || body.password) {
      respuesta2 =  await auth.agregar({
            id: insertId,
            usuario: body.usuario,
            password: body.password
        })
    }
    return respuesta2;
}

module.exports = {
    todos,
    uno,
    eliminar,
    agregar
}