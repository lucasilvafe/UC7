const express = require('express');
const { listaDeCarros, listarCarrosPorCor } = require('./controladores/carros');
const app = express();

app.get('/veiculos/:marca', listaDeCarros);
app.get('/veiculos/:cor', listarCarrosPorCor);


app.listen(3000, () => {
    console.log('Tudo Orayte na porta 3000 do servidor dos carro');
})
