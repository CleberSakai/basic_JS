const medidaSelecionada = prompt("Escolha a Medida que Deseja Conveter:\nmilímetro(mm)\ncentímetro(cm)\nDecímetro(dm)\ndecâmetro(dam)\nhectômetro(hm)\nquilômetro(km)")

let valor = parseFloat(prompt("Qual o valor da medida em metros? "))

switch (medidaSelecionada) {
    case "mm" :
        valor *= 1000
        alert("O valor em milímetros é: " + valor + " mm")
        break
    case "cm" :
        valor *= 100
        alert("O valor em centímetros é: " + valor  + " cm")
        break
    case "dm":
        valor *= 10
        alert("O valor em Decímetros é: " + valor  + " dm")
        break
    case "dam":
        valor *= 0.1
        alert("O valor em decâmetros é: " + valor  + " dam")
        break
    case "hm":
        valor *= 0.01
        alert("O valor em hectômetros é: " + valor  + " hm")
        break
    case "km":
        valor *= 0.001
        alert("O valor em quilômetros é: " + valor  + " km")
        break
    default:
        alert("O valor passado é inválido...")
    break
}