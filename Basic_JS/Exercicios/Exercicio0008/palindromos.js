let palavraDigitada = prompt("Informe a palavra: ")
let palavraInvertida = ""

for (let i = palavraDigitada.length -1; i >= 0; i--) { // inciando o laço do ultimo indice da palavra digitada pelo usuario
    
   palavraInvertida += palavraDigitada[i]
    
}

if(palavraDigitada === palavraInvertida) {
    alert("A palavra é um Palíndromo")
   } else {
    alert("A Palavra não é um Palímedro, " + palavraDigitada + " !== " + palavraInvertida )
   }