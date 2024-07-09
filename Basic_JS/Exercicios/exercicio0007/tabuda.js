let numeroSelecionado = parseFloat(prompt("Qual número deseja utilizar nos calculos? "))

let resultados = ""

for(i = 1; i <= 20; i++) {

resultados +="--> " + numeroSelecionado + " x " + i + "=" + (numeroSelecionado * i) + "\n"

}

alert("Resultados:\n  " + resultados)