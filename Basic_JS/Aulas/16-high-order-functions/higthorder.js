// Funções de alta-ordem, ou higth-order functions, são funções que
// recebem outras funções como parametro e a executam em algum momento

function calcular(a, b, operacao) {
    console.log("Realizando operação...")
    const resultado = operacao(a, b)
    return resultado
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

console.log(calcular(5, 5, somar))
console.log(calcular(10,5, subtrair))

// Ao usar uma função sem os () estamos referenciando ela.

// também podemos escrever funções anônimas dentro da própria chamada da high-order function

calcular(10, 6, function(x,y) {
    return x * y
})



// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks



function mostrarElementos(elemento, indice, lista) {
    console.log(
        elemento,
        indice,
        lista
    )
}

lista = ["Maça", "Banana", "Abacaxi"]


// forma tradicional
for(i = 0; i < lista.length; i++) {
    console.log(lista[i], i, lista)
}


// forma funcional
lista.forEach(mostrarElementos)

// também pode ser feito
lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})