const colecaoDeFilmes = []

function adicionarFilme() {
    const titulo = prompt("Qual o titulo do filme? ")
    const diretor = prompt("Qual o nome do diretor desse filme? ")
    const anoDeLancamento = parseInt(prompt("Qual o ano de lançamento desse filme? (AAAA)"))
    const generoFilme = prompt("Qual o gênero do filme? ")

    if(!titulo || !diretor || !anoDeLancamento || !generoFilme) {
        alert("Todos os campos são obrigatórios!")
    }

    const filme = {
        titulo,
        diretor,
        anoDeLancamento,
        generoFilme
    }

    colecaoDeFilmes.push(filme)

    return filme

}

function listarFilmes() {

    if(colecaoDeFilmes.length <= 0) {
        alert("A lista de filmes está vazia")
    }

    let listaDeFilmes = "Coleção de Filmes: \n\n"
    
    colecaoDeFilmes.forEach(function(filme, index){
        listaDeFilmes += "filme " + (index + 1) + "\n"
        listaDeFilmes += "Nome do Filme: " + filme.titulo + "\n"
    })

    alert(listaDeFilmes)
}

function buscarFilme() {
    const procurarFilme = prompt("Qual o nome do filme que deseja pesquisar? ")

    const filmeEcontrado = colecaoDeFilmes.find((filme) =>  filme.titulo.toLowerCase() === procurarFilme.toLocaleLowerCase())

    if(filmeEcontrado) {
        alert("O filme foi encontrado na lista " + filmeEcontrado.titulo ) // Usamos filmeEcontrado.titulo, pois é a variavel que corresponde ao criterio de busca
    }
}

function removerFilme() {
    const tituloRemover = prompt("Qual o nome do filme que deseja remover? ")

    const indiceFilme = colecaoDeFilmes.findIndex((filme) => filme.titulo.toLowerCase() === tituloRemover.toLowerCase())

    if(indiceFilme !== -1) {
        colecaoDeFilmes.splice(indiceFilme, 1)
        alert("O filme " + tituloRemover + " foi removido com sucesso" )
    } else {
        alert("O titulo do filme que você digitou, não foi encontrado!")
    }
}

function editarFilme() {
    const tituloEditar = prompt("Qual o titulo do filme que você deseja editar? ")

    const indiceFilme = colecaoDeFilmes.findIndex((filme) => filme.titulo.toLowerCase() === tituloEditar.toLocaleLowerCase())


    if(indiceFilme !== -1) {
        const novoTitulo = prompt("Qual o novo titulo que deseja adicionar? ")
        
        colecaoDeFilmes[indiceFilme].titulo = novoTitulo

        alert("Titulo do Filme modificado com sucesso!")
    } else {
        alert("O titulo do filme não foi encontrado!")
    }
}

function exibirMenu() {
    let opcao = "";
    do {
        opcao = prompt(
            "Coleção de Filmes\n\nEscolha uma das opções:\n" +
            "1. Adicionar um filme\n" +
            "2. Listar todos os filmes\n" +
            "3. Buscar um filme\n" +
            "4. Remover um filme\n" +
            "5. Editar um filme\n" +
            "6. Sair"
        );

        switch(opcao) {
            case "1":
                adicionarFilme();
                break;
            case "2":
                listarFilmes();
                break;
            case "3":
                buscarFilme();
                break;
            case "4":
                removerFilme();
                break;
            case "5":
                editarFilme();
                break;
            case "6":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while(opcao !== "6");
}

// Chama a função para exibir o menu e iniciar o programa
exibirMenu();