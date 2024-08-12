var express = require('express');
const respuesta = require('../src/red/respuestas.js')
var router = express.Router();

const controlador = require('../src/auth/controlador.js');


//rutas de geters seters put delete

router.get('/login', login);


/* GET home page. */

  async function login(req, res, next) {
    try{
      const token = await controlador.login(req.body.usuario, req,body.password);
        respuesta.success(req, res, token, 200);
    
    }catch(err){
      //respuesta.error(req, res, err, 500);
      console.log(err)
    next(err);
    }
 };


  module.exports = router;
  


