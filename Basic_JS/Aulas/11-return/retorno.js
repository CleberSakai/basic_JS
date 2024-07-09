                    // Uma função sem saída explicita retornará undefined

// O retorno é usado para armazenarmos a saida da função em uma variavel

function calcularMedia(a, b) {
    return (a + b) / 2
}

const reusltado = calcularMedia(5, 9)
console.log(reusltado)


                        // Como usar o return para a função ter uma saida?

// Para dizer qual é a saida de uma função, usamos o return

function criarProduto(nome, preco) {
    produto = {
        nome,
        preco,
        estoque: 1
    }

    return produto
}

const notebook = criarProduto("Notebook Intel i3 16GB", 4000)
console.log(notebook)

// Também podemos jogar a saida de uma função dentro dos parametros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 2000))


                            // E o retorno pode ser qualquer expressão ou retorno de outra função


// O retorno não precisa ser uma variavel, pode ser o resultado de qualquer expressão

function areaRetangular(base, altura) {
    return base * altura
}

console.log(areaRetangular(3, 5))

// ou até o retorno de outra função
function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaQuadrada(8))

                        // Uma função só pode retornar uma vez

// Uma função só pode ser retornada uma vez, depois do return nada mais é executado.
// Repare que o vsCode nos avisa que nosso codigo não sera executado.

function olaMundo() {
    let texto = "..."
    return texto
    texto = "Olá, Mundo"
    console.log(texto)
}

console.log(olaMundo())


                        // Porem cada ramificação pode ter o retorno diferente

// No entanto, diferentes ramificações dentro da função podem ter diferentes retornos

function maiorIdade(idade) {
    if(idade > 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maiorIdade(20))
console.log(maiorIdade(17))