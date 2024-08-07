
const db = require('../DB/mysq.js');

const TABLA = 'clientes';

function todos() {
    return db.todos(TABLA);
}

module.exports = {
    todos,
}