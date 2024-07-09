let imoveis = []

let opcaoMenu = ""

do {

    opcaoMenu = prompt("Selecione uma das opções:\n1 - Salvar um Imóvel\n2 - Listar Imoveis\n3 - Sair")


    switch (opcaoMenu) {
        case "1":

        const informacoesImovel = {} // iniciando um objeto vazio, para armazenar todas as chaves criadas abaixo

        informacoesImovel.pessoa = prompt("Qual o nome do Proprietário?") // criando chave "pessoa" e o valor será passado pelo usuario
        informacoesImovel.qntdQuartos = prompt("Qual a quantidade de quartos?")
        informacoesImovel.QntdBanheiros = prompt("Qual a quantidade de banheiros?")
        informacoesImovel.possuiGaragem = prompt("Possui Garagem? (Sim/Não)")
        const confirmacao = prompt("Confimar o Cadastramento? (Sim/Não)")

        if(confirmacao === "Sim") {
            imoveis.push(informacoesImovel) // Adicionar o obejto informacoesImovel no array vazio imoveis[]
            alert("Imovel Cadastrado com Sucesso!")
        } else {
            alert("Você optou por não cadastrar o imovel")
        }
        break

        case "2":

        for(i = 0; i < imoveis.length; i ++) {
            alert("Imovel " + (i + 1) +
            "\nProprietatário: " + imoveis[i].pessoa +
            "\nQuartos: " + imoveis[i].qntdQuartos +
            "\nBanheiros: " + imoveis[i].QntdBanheiros +
            "\nPossui Garagem? " + imoveis[i].possuiGaragem
            )
        }

 
        break

        case"3":
            alert("Você decidiu encerrar a aplicação...")
            break

        default:
            alert("Opção Digitada Inválida!")
    }


} while (opcaoMenu !== "3")