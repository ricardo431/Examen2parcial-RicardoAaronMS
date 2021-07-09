const express = require('express');
const ControladorCocacola = require('../controlador/ControladorCocacola');

const Router = express.Router();

Router.get('/',ControladorCocacola.index)
.post('/',ControladorCocacola.crear)
.get('/:key/:value',ControladorCocacola.buscar,ControladorCocacola.mostrar)
.put('/:key/:value',ControladorCocacola.buscar,ControladorCocacola.actualizar)
.delete('/:key/:value',ControladorCocacola.buscar,ControladorCocacola.eliminar);

module.exports = Router;



console.log('CocaCola');