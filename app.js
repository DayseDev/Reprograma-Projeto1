const livros = require('./database')


const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')
const resposta = read.question(`
========== Menu ==========
1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de página
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]

`)

switch (resposta) {
    case '1':
        buscarLivros()
        break
    case'2':
        listarLivrosOrdenados()
        break
    case '3':
        listarRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    default:
        console.log('fim do algoritmo')
        break
}

console.log(resposta)