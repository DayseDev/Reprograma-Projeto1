const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados= () => {
    const opcaoInicial = read.question('Deseja exibir livros que ja foram lidos e que sao recomendados? S/N ').toUpperCase()
    if  (opcaoInicial == 'S'){
        
        const lidosErecomendados = livros.filter(livro => livro.leu == true && livro.recomenda == true)
            console.table(lidosErecomendados)

    }
}

module.exports = listarRecomendados