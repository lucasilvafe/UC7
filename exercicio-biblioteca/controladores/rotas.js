const express = require('express');
const { listaDeLivros, listarPorId, AdicionarLivros } = require('./instrutores');

const rotas = express();

rotas.get('/livros', listaDeLivros);
rotas.get('/livros/:id', listarPorId)
rotas.post('/livros/', AdicionarLivros);

module.exports = rotas;