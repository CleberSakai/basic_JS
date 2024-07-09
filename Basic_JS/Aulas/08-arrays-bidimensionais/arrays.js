// Arrays podem receber qualquer tipo de dado, inclusive outros arrays

const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
]

// Cada par de colchetes referencia  um nível mais interno do array

console.log(arr[0]) // saida  "1 nivel"
console.log(arr[1]) // saida "2 nivel" , 42, true
console.log(arr[1][0]) // saida "2 nivel"
console.log(arr[1][1]) // 42
console.log(arr[2]) //  Saída: [ [ '3º nível, 1º item', 'Olá, mundo!' ], [ '3º nível, 2º item', 'Oi, mundo!' ] ]
console.log(arr[2][0]) // saida [ '3º nível, 1º item', 'Olá, mundo!' ]
console.log(arr[2][1][1]) // saida "oi, mundo" 

// podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

console.table(matriz)


for(let i = 0; i < matriz.length; i++) { // interando sobre os 3 arrays dentro da matriz
    for(j = 0; j < matriz[i].length; j ++) { // iterando sobre as strings dentro de cada um dos 3 arrays dentro da matriz
        elemento = matriz[i][j]
        console.log("Elementos presentes: " + elemento )
    }
}