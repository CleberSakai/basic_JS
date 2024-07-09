const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Adicionando Elementos

// push() Adiciona um elemento ao final do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift() adiciona elementos no começo do array e devolve o novo tamanho do array
let tamanho2 = arr.unshift("Cleber")
console.log(arr)
console.log(tamanho2)

// Removendo Elementos

// pop() Remove um elemento do final do array e devolve o elemento removido
let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

// shift() Remove um elemento no começo do array e devolve o elemento removido
let elementoRemovido2 = arr.shift("Cleber")
console.log(arr)
console.log(elementoRemovido2)

// Pesquisando um elemento

// includes() Verifica se um certo elemento está presente no array
const incluso = arr.includes("Legolas")
console.log(incluso)

// indexOf() encontra o indice que possui o elemento indicado, ou -1 caso ele não exista no array

const indice = arr.indexOf("Legolas")
console.log(indice)

// Contado e Concatenando 

// slice() copia uma parte do array e devolve a parte copiada sem alterar o array orginal

const hobbits = arr.slice(0, 4)
console.log(arr)
console.log(hobbits)

// também pode ser indicado com numero negativo para infomar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(outros)

// concat() junta dois ou mais arrays e devolbe o resultado, sem alterar nenhum dos arrays
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

// Substituindo Elementos

// slipce () permite remover elementos em qualquer posição do array e substituir por novos
let substituir = arr.splice(1,  1, "Cleberson")
console.log(arr)

for(i = 0; i < arr.length; i++) {
    const elementos = arr[i]
    console.log(elementos)
}