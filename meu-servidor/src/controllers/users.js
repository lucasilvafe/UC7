const usuarios = require('../dataBase')

function listarUsuario (req, res) {
    const resultado = usuarios.find((usuarios) => {
        return usuarios.id === Number(req.params.id)
    })

    res.send(resultado)
}

//---------------------------------------------------------//
function listarUsuarioPorParametroOpcional (req, res){
    //console.log(req.query.nome);
    const { nome } = req.query;

    let resultado = '';
    if (nome) {
        //resultado = usuario.find((usuario) => {
        resultado = usuarios.filter((usuarios) => {
            return usuarios.nome === nome;
        })
    }

    if (resultado == undefined){
        res.send('Não Encontrou!')
    }
    res.send(resultado)
}


module.exports = {
    listarUsuario,listarUsuarioPorParametroOpcional
}