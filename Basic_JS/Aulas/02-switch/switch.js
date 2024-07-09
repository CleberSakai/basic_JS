const resultado = prompt("Escolha uma alternativa: \na)\nb)\nc)")

switch (resultado) {
    case "a":
        prompt("O resultado é A")
        break
    case "b":
        prompt("O resultado é B")
        break
    case "c":
        prompt("O resultado é C")
        break
    default:
        alert("Mensagem quem será exibida por padrão...")
}