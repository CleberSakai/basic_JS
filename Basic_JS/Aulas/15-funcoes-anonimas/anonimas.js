                        // Funcoes como valores no javascript

// No javacript as funções podem ser atribuidas a variaveis como se elas fossem valores

function somar(a, b) {
    return a + b
}

// repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estariamos executando a função
operacao = somar 

console.log(operacao(3, 5))

                        // O que são funções anonimas?

// Para isso, podemos usar as funções anonimas, que nada mais são que funções que não possuem nome

const subtrair = function(a, b) {
    return a -b
}

console.log(subtrair(10, 5))


                    //  Possiveis usos

// com as funções anônimas podemos, por exemplo, atribuir uma função a uma chave de objeto

const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) { // funcao anonima
    return a * b
}

console.log(calculadora.multiplicar(3, 5))

                        // Perigos das funções anonimas

// Funções anonimas só podem ser chamadas após a atribuição da variável.
// elas não são jogadas para o topo do arquivo como funções normais.

olaMundo() // aqui não causa nenhum erro, pois uma função "normal" é jogada para o topo do arquivo
// oiMundo() // aqui causa um erro, pois as funcoes anonimas não são jogadas para o topo.


function olaMundo() {
    console.log("Olá mundo")
}

const oiMundo = function() {
    console.log("Oi mundo")
}

oiMundo() // Nesse caso a função anonima funcionaria, pois ela foi chamada depois de declarada.
