// os que são os metodos em JS?
// Basicamente são funções, mas atreladas a objetos

// Conseguimos reverenciar dentro de um objeto, ele proprio
// usando a palavra reservada this

let pessoa  = {
    nome: "Cleberson",
    idade: "22",
    dizerOla() {
        console.log("Olá Mundo, meu nome é: " + this.nome) // esse obejto.nome
    }
}

console.log(pessoa)
pessoa.dizerOla() // chamando o metodo do objeto, ou seja basicamente sua funcao