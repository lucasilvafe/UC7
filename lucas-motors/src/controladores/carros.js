const veiculos = require('../dataBase')


    function listaDeCarros (req, res) {
        const resultado = veiculos.filter((veiculos) => {
        return veiculos.marca === (req.params.marca)
        })
            res.send(resultado)
    }

function listarCarrosPorCor (req, res){
    const corCarro = veiculos.filter((veiculos) => {
        return veiculos.cor === (req.params.cor)
    })
    res.send(corCarro)
}

module.exports = {
    listaDeCarros,listarCarrosPorCor
}