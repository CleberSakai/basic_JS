quantidadeInicial = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponível? "))

do {
   opcaoSelecionada = prompt("Sua quantidade inicial é " + quantidadeInicial + "\n1 - Adicionar dinherio\n2 - Remover dinheiro\n3 - Sair")
   

    switch (opcaoSelecionada) {
        case "1":
            quantidadeAdicionada = parseFloat(prompt("Qual quantidade deseja adicionar? "))
            quantidadeInicial += quantidadeAdicionada
            break
        case "2":
            quantidadeRemovida = parseFloat(prompt("Qual a quantidade a ser removida? "))
            quantidadeInicial -= quantidadeRemovida
            break
        case"3":
        alert("Encerrendo o Programa...")
        break
        default :
        alert("Entrada inválida")
    }


} while (opcaoSelecionada !== "3")