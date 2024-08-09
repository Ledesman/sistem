var express = require('express');
const respuesta = require('../src/red/respuestas.js')
var router = express.Router();

const controlador = require('../src/usuarios/controlador.js');


//rutas de geters seters put delete
router.get('/', todos);
router.get('/:id',uno);
router.put('/', eliminar);
router.post('/', agregar);

/* GET home page. */
async function todos(req, res, next) {
  try{
    const items = await controlador.todos();
    respuesta.success(req, res, items, 200);

  }catch(err){

    next(err);
  }
  };
  
  async function uno(req, res, next) {
    try{
      const items = await controlador.uno(req.params.id)
        respuesta.success(req, res, items, 200);
    
    }catch(err){
      //respuesta.error(req, res, err, 500);
    next(err);
    }
 };
 async function agregar(req, res, next) {
  try{
    const items = await controlador.agregar(req.body)
     if (req.body.id == 0) {
      mensaje = 'Item Guardado con exito';
     }else{
      mensaje = 'Item Actualizado con exito';
     }
    respuesta.success(req, res, mensaje, 201);
  
  }catch(err){
  
    next(err);
  }
};

 async function eliminar(req, res, next) {
  try{
    const items = await controlador.eliminar(req.body)
      respuesta.success(req, res, 'Item eliminado satifactoriamente', 200);
  
  }catch(err){
    //respuesta.error(req, res, err, 500);
    next(err);
  }
};

  module.exports = router;
  


