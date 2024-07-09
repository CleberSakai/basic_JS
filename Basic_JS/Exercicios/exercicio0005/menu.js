let opcao = ""

do {
   opcao = prompt("Bem Vindo, as opções são:\n1-Opção \n2-Opção \n3-Opção \n4-Opção \n5-Encerrar").trim();

   // faça isso, se for 5 encerre
    switch (opcao) {
        case "1":
            alert("Você escolheu a primeira opção!")
            break
        case "2":
            alert("Você escolheu a segunda opção!")
            break
        case "3":
            alert("Você escolheu a terceira opção!")
            break
        case "4":
            alert("Você escolheu a quarta opção!")
            break
        case "5":
            alert("Encerrando o Programa...")
            break
        default:
            alert("Entrada Invalida")
            break
    }
} while (opcao !== "5") ; // enquanto for diferente de 5


