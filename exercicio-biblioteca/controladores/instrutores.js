const  {livro}  = require("./database");
const { id } = require("./database")
function listaDeLivros (req, res) {
    return res.status(200).json(livros)
  }

  function listarPorId (req, res){
    const { id } = req.params;
    const resultado = livros.find( (livro) =>{
        return livro.id === Number(id);

    })
  
  if(!resultado){
    return res.status(404).json({mesagem: 'Livro não localizado pelo ID'})
}
    return res.status(200).json(resultado)
}


function AdicionarLivros (req, res){
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas} = req.params;

    if(!titulo){
        return res.status(404).json({pnel: 'Titulo não encontrado!'})
    }
    if(!autor){
        return res.status(404).json({pnel: 'Autor não encontrado!'})
    }
    if(!ano){
        return res.status(404).json({pnel: 'ano não encontrado!'})
    }
    if(!numPaginas){
        return res.status(404).json({pnel: 'Numero de paginas não encontrado!'})
    }
    const livrosAdd = {
        id: id++,
        titulo: titulo,
        autor: autor,
        ano: ano,
        numPaginas: numPaginas
    }
    
    livro.push(livrosAdd)
    return res.status(200).json({mensagem: 'Livro adicionado!'})



}

module.exports = {
    listaDeLivros,listarPorId,AdicionarLivros
}