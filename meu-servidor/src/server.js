//Importa o express para o mneu projeto
const express = require('express');
const { listarUsuario, listarUsuarioPorParametroOpcional } = require('./controllers/users');

// Cria uma instancia do express
const app = express();


// '/' é o endereço base do server
// req - recebe a requesição
// res - envia uma resposta
// send é uma propriedade que envia alguma coisa
// app.get('/usuario', (req, res) => {
//     res.send(pessoas)
// })




// uma rota com parametros
app.get('/usuario/:id', listarUsuario)

app.get('/usuario', listarUsuarioPorParametroOpcional)











//----------------------------------------//
 app.listen(3000, () => {
     console.log('Servidor funcionando na porta 3000');
    
 })

// Umas rota com parametro opcional



