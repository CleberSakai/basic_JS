const nomeTurista = prompt("Olá Tusrista, Qual o seu nome? ")

let continuar = prompt("Já visitou alguma cidade? (sim/não) ")

let total = 0
let cidades = ""


while(continuar === 'sim') {



    let cidade = prompt("Qual o nome da cidade? ")

    cidades += " - " + cidade + "\n"
    total ++

    continuar = prompt("Frequentou Mais alguma cidade? (sim/não)") // enquanto a resposta for sim, o laço irá se repetir

}



alert("O Turista de nome: " + nomeTurista + " visitou as cidades:\n " + cidades + " o que totaliza: " + total)