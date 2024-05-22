const express = require('express');
const rotas = require('../controladores/rotas');
const app = express()

app.use(express.json());

app.use(rotas);

app.listen(3000, ()=>{
    console.log('Servidor: http://localhost:3000');
})