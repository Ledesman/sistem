
const mysq = require('mysql');

const config = require('../../config');

const dbconfig = {
    host: config.mysq.host,
    user: config.mysq.user,
    password: config.mysq.password,
    database: config.mysq.database
}
let conexion;

function conMysql() {
    conexion = mysq.createConnection(dbconfig);

    conexion.connect((err) =>{
        if (err) {
            console.log(['db error'], err);
            setTimeout(conMysql, 200);
        }else{
            console.log('DB Conectada Correctamente !!!')
        }
    });
    conexion.on('error', err => {
        console.log('[db err]', err)
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMysql();
        }else{
            throw err;
        }
    })
}
conMysql();

function todos(tabla) {
    return  new Promise( (resolve, reject) =>{
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) =>{
            if(error) return reject(error)
                resolve(result)
        })
    });
}
function uno(tabla, id) {
    
}
function agregar(tabla, data) {
    
}
function eliminar(tabla, id) {
    
}

module.exports ={
    todos,
    uno,
    agregar,
    eliminar
}