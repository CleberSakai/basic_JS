const primeiroVeiculo = prompt("Insira o nome do primeiro veiculo: ")
const primeiraVelocidade = parseFloat(prompt("Insira a sua velocidade: "))

const segundoVeiculo = prompt("Insira o nome do segundo veiculo: ")
const segundaVelocidade = parseFloat(prompt("Insira a sua velocidade: "))

if (primeiraVelocidade > segundaVelocidade) {
    alert("O mais rápido é: " + primeiroVeiculo)
}
else if (segundaVelocidade > primeiraVelocidade) {
    alert("O mais rápido é: " + segundoVeiculo)
} else {
    alert("Os dois veiculos tem a mesma velocidade")
}