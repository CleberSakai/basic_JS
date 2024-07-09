const personagemAtacante = prompt("Qual o Nome do Personagem Atacante? ")
const danoDeAtaque = parseFloat(prompt("Insira o Seu Dano de Ataque: "))

const personagemDefensor = prompt("Qual o Nome do Personagem Defensor? ")
let quantidadeDeVida = parseFloat(prompt("Qual a Quantidade De Vida? "))
const poderDeDefesa = parseFloat(prompt("Qual o Seu Poder de Defesa? "))
const possuiEscudo = prompt("O Personagem possui um escudo? (sim/não) ")

let danoCausado = 0;

if(danoDeAtaque > poderDeDefesa && possuiEscudo == "não") {
    danoCausado = danoDeAtaque - poderDeDefesa
}
else if(danoDeAtaque > poderDeDefesa && possuiEscudo == 'sim') {
    danoCausado = (danoDeAtaque - poderDeDefesa) / 2
}


quantidadeDeVida -= danoCausado

alert(personagemAtacante + " " + "Causou: " + danoCausado + " de Dano " )

alert("A vida restante do personagem defensor é: " + quantidadeDeVida)
