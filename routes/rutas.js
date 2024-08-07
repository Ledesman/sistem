var express = require('express');
const respuesta = require('../src/red/respuestas.js')
var router = express.Router();

const controlador = require('../src/clientes/controlador.js')

/* GET home page. */
router.get('/',async function(req, res) {
  const items = await controlador.todos()
    respuesta.success(req, res, items, 200);
  });
  
  module.exports = router;
  


