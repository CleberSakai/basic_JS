let cartas = []
let opcao = ""


do {

    let cartasNoBaralho = ""

    for(i = 0; i < cartas.length; i ++) {
        cartasNoBaralho += cartas[i] + "\n"
    }

    opcao = prompt("Cartas Atuais:\n" + cartasNoBaralho + "Selecione uma das opções:\n1 - Adicionar uma carta\n2 - Puxar uma Carta\n3 - sair")

    switch(opcao) {
        case "1":
           nomeDaCarta = prompt("Qual o Nome da carta que deseja adicionar? ")
            cartas.unshift(nomeDaCarta)
           alert("A carta " + nomeDaCarta + " foi adicionada")
           break
        case "2":
            cartaRemovida = cartas.shift()
            alert("A carta " + cartaRemovida + " foi removida!")
            break
        case "3":
            alert("Você optou por sair...")
            break
        default:
            alert("Não Corresponde a Nenhuma das Opcoes")
            break
    }


} while(opcao !== "3")