let fila = ["Marcola", "Mateus"]
let opcao = ""


do {

    let pacientes = ""

    for(i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º - " + fila[i] + '\n' // Adicionando +1 para não começar em 0
    }

    opcao = prompt("Pacientes na fila:\n" + pacientes + "Escolha uma Opcao:\n1 - Novo paciente\n2 - Consultar\n3 - Sair")
    
    switch (opcao) {
        case "1" :
            adicionarPaciente = prompt("Qual nome do próximo paciente? ")
            fila.push(adicionarPaciente)
            alert(adicionarPaciente + " Foi Adicionado a Fila! ")
            break
        case "2":
            consultarPaciente = fila.shift()
            alert("O paciente " + consultarPaciente + " foi Consultado")
            break
        case "3":
            alert("Voce optou por sair...")
            break
        default:
            alert("Não Corresponde a Nenhuma das Opções")
            break
    }

}  while(opcao != 3)