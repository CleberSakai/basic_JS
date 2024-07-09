// Inicializa um array vazio para armazenar as vagas
const vagas = [] 

// Função para listar todas as vagas
function listarVagas() {
    // Utiliza reduce para criar um texto com a lista de vagas
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". " // Adiciona o índice da vaga
        textoFinal += vaga.nome // Adiciona o nome da vaga
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n" // Adiciona a quantidade de candidatos
        return textoFinal // Retorna o texto acumulado
    }, "") 

    // Exibe o texto final em um alerta
    alert(vagasEmTexto)
}

// Função para criar uma nova vaga
function novaVaga() {
    // Solicita o nome, descrição e data limite da vaga ao usuário
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")

    // Solicita confirmação do usuário
    const confirmacao = confirm(
        "Deseja confirmar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\n" +
        "Descrição: " + descricao + "\n" +
        "Data Limite: " + dataLimite
    )

    // Se o usuário confirmar, cria a nova vaga e adiciona ao array de vagas
    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: [] } // Cria um objeto vaga
        vagas.push(novaVaga) // Adiciona a nova vaga ao array
        alert("Vaga Criada") // Informa ao usuário que a vaga foi criada
    }
}

// Função para exibir uma vaga específica
function exibirVaga() {
    // Solicita o índice da vaga ao usuário
    const indice = prompt("Informe o indice da vaga que deseja exibir: ")

    if (indice >= vagas.length || indice < 0) {
        alert("Indice Invalido")
        return
    }

    const vaga = vagas[indice] // Obtém a vaga correspondente

    // Cria um texto com a lista de candidatos
    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
        return textoFinal + "\n - " + candidato // Adiciona cada candidato ao texto
    }, "")

    // Exibe os detalhes da vaga em um alerta
    alert(
        "Vaga n " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\n Data Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

// Função para inscrever um candidato em uma vaga
function inscreverCandidato() {
    // Solicita o nome do candidato e o índice da vaga ao usuário
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o indice da vaga para a qual o canditato deseja se inscrever: ")
    const vaga = vagas[indice] // Obtém a vaga correspondente

    // Solicita confirmação do usuário
    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )

    // Se o usuário confirmar, adiciona o candidato à lista de candidatos da vaga
    if(confirmacao) {
        vaga.candidatos.push(candidato) // Adiciona o candidato à vaga
        alert("Inscrição realizada") // Informa ao usuário que a inscrição foi realizada
    }
}

// Função para excluir uma vaga
function excluirVaga() {
    // Solicita o índice da vaga ao usuário
    const indice = prompt("Informe o indice da vaga que deseja exluir: ")
    const vaga = vagas[indice] // Obtém a vaga correspondente

    // Solicita confirmação do usuário
    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )

    // Se o usuário confirmar, remove a vaga do array
    if(confirmacao) {
        vagas.splice(indice, 1) // Remove a vaga do array
        alert("Vaga excluída.") // Informa ao usuário que a vaga foi excluída
    }
}

// Função para exibir o menu de opções
function exibirMenu() {
    // Solicita ao usuário que escolha uma opção do menu
    const opcao = prompt (
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    return opcao // Retorna a opção escolhida pelo usuário
}

function executar() {
    let opcao = ""
    
    do {

        opcao = exibirMenu()

        switch(opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção Inválida...")
                break
        }

    } while(opcao !== "6")
}


executar()




