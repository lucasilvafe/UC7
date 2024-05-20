const express = require('express');
const { listarInstrutores, listarInstrutor } = require('./instrutores');

const rotas = express();

//rota
rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutor/:id', listarInstrutor);

module.exports = rotas;