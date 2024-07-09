                                // O que é escopo e como funciona?
                            
// Escopo é o contexto onde a variavel foi declarada podendo ser
// mais externo (global), ou mais interno (local) (se estiver dentro de um bloco, Ex: if, else)

// Variaveis no escopo externo, podem ser usadas dentro de escopos mais internos

let pokemon = "Charmander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon) // primeiro é executado Charmander
evoluir() // depois a função evoluir() atribui a varivel um novo valor Charmeleon
console.log(pokemon) // Aqui o valor da variavel já foi atualizada

// variaveis de escopo mais interno não podem ser usadas fora dele em escopos externos

function criarAnimal() {
    let animal = "Gato" // O valor dessa variavel não pode ser lido em um escopo mais externo.
}

// console.log(animal) // Gera um Erro



                                // Escopo com var e let (ou const)

// Apenas variaveis difinidas com var ficam disponiveis em um escopo mais externo

function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = "Aprovado"
    } else {
        var aprovado = false
        let situacao = "Reprovado"
    }

    // console.log(nota) // A nota gera um print no console
    // console.log(aprovado) // é exibido true no console, pois o var é lido
    // console.log(situacao) // gera erro, pois situação nao pode ser lido em um escopo externo
}

avaliarNota(83)
avaliarNota(49)

// Mas mesmo var não consegue "sair" para fora do escopo da função

function ola() {
    var texto = "Olá Mundo" 
}

// console.log(texto) // é gerado um erro.



                                // Inicialização de variaveis com var e let (ou const)

// Apenas variaveis declaradas com var são carregadas sempre no começo do codigo, acima de todo o resto

console.log(nome) // O resultado gerado é undifined, pois "var" é lido acima de todo codigo, mas não tem seu valor alocado
console.log(sobrenome) // Gera um erro, pois chamei a variavel mesmo sem ser declarada.

var nome = "Cleberson"
let sobrenome = "Rodrigues"

console.log(nome)
console.log(sobrenome)
