//Importa o express para o mneu projeto
const express = require('express')

// Cria uma instancia do express
const app = express();

const usuario = [
    {id: 1, nome: 'Maria', idade: 18},
    {id: 2, nome: 'Eduanea', idade: 33},
    {id: 3, nome: 'Maria', idade: 45}
]

// '/' é o endereço base do server
// req - recebe a requesição
// res - envia uma resposta
// send é uma propriedade que envia alguma coisa
// app.get('/usuario', (req, res) => {
//     res.send(pessoas)
// })

// uma rota com parametros
app.get('/usuario/:id', (req, res) =>{
    const resultado = usuario.find((usuario) => {
        return usuario.id == req.params.id
    })

    res.send(resultado)
})

 app.listen(3000, () => {
     console.log('Servidor funcionando na porta 3000');
    
 })

// Umas rota com parametro opcional

app.get('/usuario', (req, res) => {
    console.log(req.query.nome);
    const { nome } = req.query;

    let resultado = '';
    if (nome) {
        //resultado = usuario.find((usuario) => {
        resultado = usuario.filter((usuario) => {
            return usuario.nome === nome;
        })
    }

    if (resultado == undefined){
        res.send('Não Encontrou!')
    }
    res.send(resultado)
})