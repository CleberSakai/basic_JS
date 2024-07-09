function executar() {

let opcao = ""

function areaTriangulo() {
    const base = parseFloat(prompt("Qual a base do Triângulo?"))
    const altura = parseFloat(prompt("Qual a altura do Triângulo? "))
    return (base * altura) / 2
}

function areaRetangulo() {
    const base = parseFloat(prompt("Qual a base do Retângulo?"))
    const altura = parseFloat(prompt("Qual a altura do Retângulo? "))
    return base * altura
}

function areaQuadrado() {
    const lado = parseFloat(prompt("Lado do quadrado? "))
    return lado ** 2
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("Qual a base maior do trapezio? "))
    const baseMenor = parseFloat(prompt("Qual a base menor? "))
    const altura = parseFloat(prompt("Qual a altura do trapezio? "))
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo() {
    const pi = 3.14
    const raio = parseFloat(prompt("Qual o raio do circulo? "))
    return pi * raio ** 2
}

function exibirMenu() {
    return prompt("Calculadora Geométrica\n" +
        "1. Área do triângulo\n" +
        "2. Área do retângulo\n" +
        "3. Área do quadrado\n" +
        "4. Área do trapézio\n" +
        "5. Área do círculo\n" +
        "6. Sair"
    )
}



do {

    opcao = exibirMenu() // retorna e armazeba o numero digitado pelo usuario no prompt da funcao exibirmenu

    switch (opcao) {
        case "1" :
            resultado = areaTriangulo() // amarzenando o resultado do retorno da minha função
            alert("A área do trinâgulo é: " + resultado) // mostrando o resultado para o usuario
            break
        case "2" :
            resultado = areaRetangulo() 
            alert("A área do retâgulo é: " + resultado) 
            break
        case "3" :
            resultado = areaQuadrado() 
            alert("A área do quadrado é: " + resultado) 
            break
        case "4" :
            resultado = areaTrapezio() 
            alert("A área do trapezio é: " + resultado) 
            break
        case "5" :
            resultado = areaCirculo() 
            alert("A área do circulo é: " + resultado) 
            break
        case "6":
            alert("Você optou por sair do programa...")
            break
        default:
            alert("Opção digitada invalida, tente novamente...")
    }


}   while(opcao !== "6")
}

executar()